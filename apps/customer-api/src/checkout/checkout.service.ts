import { CustomException } from '@libs/common'
import { CartItem, Checkout, CheckoutDiscountItem, CheckoutItem, DISCOUNT_METHOD, Discount } from '@libs/db/entities'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DataSource, In, Not, Repository } from 'typeorm'
import { CheckoutDto } from './dto/CheckoutDto'
import { CheckoutRequest } from './dto/req/CheckoutRequest'

@Injectable()
export class CheckoutService {
  constructor(
    @InjectRepository(Checkout)
    private readonly checkoutRepository: Repository<Checkout>,
    @InjectRepository(CheckoutItem)
    private readonly checkoutItemRepository: Repository<CheckoutItem>,
    @InjectRepository(CheckoutDiscountItem)
    private readonly checkoutDiscountRepository: Repository<CheckoutDiscountItem>,
    @InjectRepository(Discount)
    private readonly discountRepository: Repository<Discount>,

    private readonly dataSource: DataSource,
  ) {}

  async create(dto: CheckoutRequest, cartItems: CartItem[]): Promise<Checkout> {
    return await this.dataSource.manager.transaction(async manager => {
      // 1. checkout 생성
      const checkoutEntity = this.checkoutRepository.create({ ...dto })
      const checkout = await manager.getRepository(Checkout).save(checkoutEntity)

      // 2. 이전 chekcout 삭제
      {
        const removeCheckouts = await manager.getRepository(Checkout).find({
          where: { checkoutId: Not(checkout.checkoutId), customerId: dto.customerId },
        })

        if (removeCheckouts.length > 0) {
          await manager.softDelete(Checkout, removeCheckouts)
        }
      }

      // 3. item 생성 및 저장
      {
        const checkoutItems: CheckoutItem[] = cartItems.map(cartItem =>
          this.checkoutItemRepository.create({
            checkoutId: checkout.checkoutId,
            menuId: cartItem.menuId,
            quantity: cartItem.quantity,
            price: cartItem.menu.price,
          }),
        )

        await manager.getRepository(CheckoutItem).save(checkoutItems)
      }

      // 4. 할인 생성
      {
        const discountItem = this.checkoutDiscountRepository.create({
          checkoutId: checkout.checkoutId,
          discountId: dto.discountId,
        })

        await manager.save(CheckoutDiscountItem, discountItem)
      }

      return checkout
    })
  }

  async findOne(customerId: number): Promise<CheckoutDto> {
    const checkout = await this.checkoutRepository.findOneBy({ customerId })
    if (!checkout) throw CustomException.notFound('checkout')

    const checkoutItems = await this.checkoutItemRepository.findBy({ checkoutId: checkout.checkoutId })

    const totalPrice = checkoutItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)

    const discountItems = await this.checkoutDiscountRepository.find({
      where: {
        checkoutId: checkout.checkoutId,
        discount: {
          isAvailable: true,
        },
      },
      relations: { discount: true },
    })

    const discounts = discountItems.map(item => item.discount)

    const fixedDiscountAmount = discounts
      .filter(discount => discount.method === DISCOUNT_METHOD.FIXED_AMOUNT)
      .reduce((acc, cur) => acc + cur.value, 0)

    // TODO:: 정률할인

    const checkoutDto: CheckoutDto = {
      customerId: customerId,
      checkoutId: checkout.checkoutId,
      totalAmount: totalPrice - fixedDiscountAmount,
      checkoutItems: checkoutItems,
    }

    return checkoutDto
  }
}
