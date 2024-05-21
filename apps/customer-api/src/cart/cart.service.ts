import { CustomException } from '@libs/common'
import { Cart, CartItem } from '@libs/db/entities'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CartItemAddRequest } from './dto/request/CartItemAddRequest'

@Injectable()
export class CartService {
  private INIT_QUANTITY = 1

  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private readonly cartItemRepository: Repository<CartItem>,
  ) {}

  async upsert(dto: CartItemAddRequest): Promise<CartItem> {
    const cart = await this.cartRepository.save(this.cartRepository.create({ customerId: dto.customerId }))

    const cartItem = await this.cartItemRepository.findOneBy({
      cartId: cart.cartId,
      menuId: dto.menuId,
      storeId: dto.storeId,
    })

    let result: CartItem | null = null
    if (!cartItem) {
      result = await this.cartItemRepository.save(this.cartItemRepository.create({ cartId: cart.cartId, ...dto }))
    } else {
      cartItem.quantity += dto.quantity
      result = await this.cartItemRepository.save(cartItem)
    }

    return result
  }

  async findByCustomerId(customerId: number): Promise<{ cart: Cart; cartItems: CartItem[] }> {
    const cart = await this.cartRepository.findOneBy({ customerId })
    if (!cart) throw CustomException.notFound('cart')

    const cartItems = await this.cartItemRepository.find({
      where: { cartId: cart.cartId },
      relations: { menu: true },
    })

    return { cart, cartItems }
  }

  async remove(customerId: number, cartItemId: number) {
    const cart = await this.cartRepository.findOneBy({ customerId })
    if (!cart) throw CustomException.notFound('cart')

    const cartItem = await this.cartItemRepository.findOneBy({ cartItemId })
    if (!cartItem) throw CustomException.notFound('cartItem')

    cartItem.quantity = 0
    cartItem.deletedAt = new Date()
    await this.cartItemRepository.save(cartItem)
  }
}
