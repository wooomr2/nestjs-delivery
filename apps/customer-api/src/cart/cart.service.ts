import { CustomException } from '@libs/common'
import { Cart, CartItem } from '@libs/db/entities'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AddCartReq } from './dto/req/add-cart.req'
import { CartQueryRequest } from './dto/req/cartQuery.req'

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private readonly cartItemRepository: Repository<CartItem>,
  ) {}

  async upsert(dto: AddCartReq) {
    const cart = await this.cartRepository.findOneBy({ customerId: dto.customerId })
    if (!cart) {
      const cartCreated = await this.cartRepository.save(this.cartRepository.create({ customerId: dto.customerId }))
      await this.#addMenuToCart(cartCreated, dto)
    } else {
      await this.#addMenuToCart(cart, dto)
    }
  }

  async #addMenuToCart(cart: Cart, dto: AddCartReq) {
    const cartItem = await this.cartItemRepository.findOneBy({
      cartId: cart.cartId,
      menuId: dto.menuId,
      storeId: dto.storeId,
    })

    if (!cartItem) {
      await this.cartItemRepository.save(this.cartItemRepository.create({ cartId: cart.cartId, ...dto }))
    } else {
      cartItem.quantity += dto.quantity
      await this.cartItemRepository.save(cartItem)
    }
  }

  async findByCustomerId(cartQueryRequest: CartQueryRequest): Promise<Cart> {
    const cart = await this.cartRepository.findOneBy({ customerId: cartQueryRequest.customerId })
    if (!cart) throw CustomException.notFound('cart')
    const cartItems = await this.cartItemRepository.findBy({ cartId: cart.cartId })

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
