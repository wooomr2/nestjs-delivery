import { CustomException } from '@libs/common'
import {
  CartItem,
  Checkout,
  CheckoutDiscountItem,
  CheckoutItem,
  Discount,
  ORDER_STATUS,
  Order,
  OrderDiscountItem,
  OrderItem,
} from '@libs/db/entities'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DataSource, In, Repository } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { OrderDetailDto } from './dto/OrderDetailDto'
import { CreateOrderReq } from './dto/req/CreateOrderReq'

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Checkout)
    private readonly checkoutRepository: Repository<Checkout>,
    @InjectRepository(CheckoutItem)
    private readonly checkoutItemRepository: Repository<CheckoutItem>,
    @InjectRepository(CheckoutDiscountItem)
    private readonly checkoutDiscountRepository: Repository<CheckoutDiscountItem>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,
    @InjectRepository(OrderDiscountItem)
    private readonly orderDiscountItemRepository: Repository<OrderDiscountItem>,
    @InjectRepository(Discount)
    private readonly discountRepository: Repository<Discount>,
    private readonly dataSource: DataSource,
  ) {}

  async create(dto: CreateOrderReq, customerId: number): Promise<Order> {
    const checkout = await this.checkoutRepository.findOneBy({ checkoutId: dto.checkoutId })
    if (!checkout) throw CustomException.notFound('checkout')

    // 주문 생성 전 주문이 이미 존재하는지 확인
    const checkoutExists = await this.orderRepository.existsBy({ checkoutId: dto.checkoutId })
    if (checkoutExists) throw CustomException.duplicateOrder()

    const checkoutItems = await this.checkoutItemRepository.findBy({ checkoutId: dto.checkoutId })

    const menuPrices = checkoutItems.map(item => item.price * item.quantity)
    const orderAmount = menuPrices.reduce((acc, cur) => acc + cur, 0)

    // 할인값 계산
    const discountItem = await this.checkoutDiscountRepository.findOne({
      where: {
        checkoutId: checkout.checkoutId,
        discount: {
          isAvailable: true,
        },
      },
      relations: { discount: true },
    })

    const discountAmount = discountItem?.discount.value || 0

    return await this.dataSource.transaction(async manager => {
      const orderEntity = this.#createOrder(
        customerId,
        checkout,
        orderAmount,
        discountAmount,
        orderAmount - discountAmount,
      )
      const order = await manager.getRepository(Order).save(orderEntity)

      const orderItems = this.#createOrderItems(order, checkoutItems)
      await manager.getRepository(OrderItem).insert(orderItems)
      if (discountItem) {
        await manager
          .getRepository(OrderDiscountItem)
          .save({ orderId: order.orderId, discountId: discountItem.discountId, discountAmount: discountAmount })
      }

      // cartItem 삭제
      await manager.getRepository(CartItem).softDelete({ menuId: In(orderItems.map(v => v.menuId)) })

      return order
    })
  }

  /** 주문 Entity 생성 */
  #createOrder(
    customerId: number,
    checkout: Checkout,
    orderAmount: number,
    discountAmount: number,
    totalAmount: number,
  ): Order {
    const order = this.orderRepository.create({
      orderUUID: uuidv4(),
      checkoutId: checkout.checkoutId,
      storeId: checkout.storeId,
      customerId: customerId,
      orderAmount,
      deliveryFee: 0,
      discountAmount: discountAmount,
      totalAmount,
      status: ORDER_STATUS.PROCESSING,
    })

    return order
  }

  /** 주문아이템 Entity 생성 */
  #createOrderItems(order: Order, checkoutItems: CheckoutItem[]): OrderItem[] {
    const orderItems = checkoutItems.map(item =>
      this.orderItemRepository.create({
        orderId: order.orderId,
        menuId: item.menuId,
        quantity: item.quantity,
        price: item.price,
      }),
    )

    return orderItems
  }

  async getOrderDetail(orderId: number, customerId: number): Promise<OrderDetailDto> {
    const order = await this.orderRepository.findOne({
      where: { customerId: customerId, orderId: orderId },
      relations: {
        orderItems: true,
        orderDiscountItem: true,
      },
    })
    if (!order) throw CustomException.notFound('order')

    const orderDetail: OrderDetailDto = {
      orderId: order.orderId,
      customerId: order.customerId,
      storeId: order.storeId,
      orderItem: order.orderItems,
      orderDiscountItem: order.orderDiscountItem,
    }

    return orderDetail
  }
}
