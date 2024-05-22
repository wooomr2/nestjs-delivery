import { CustomException } from '@libs/common'
import { Cart, CartItem } from '@libs/db/entities'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CartItemAddRequest } from './dto/req/CartItemAddRequest'

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private readonly cartItemRepository: Repository<CartItem>,
  ) {}

  async upsert(dto: CartItemAddRequest): Promise<CartItem> {
    // [TODO:: 주석 삭제할 것]
    // cartItem 개수가 많으면 left-join으로 cart info를 중복으로 가져오기에
    // 실제 서비스에 갔을때는 조회 2번 하는 것이 더 좋을 수 있다. 성능비교 필요
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
    if (cart.cartId !== cartItemId) throw CustomException.notYourCartItem()

    const cartItem = await this.cartItemRepository.findOneBy({ cartItemId })
    if (!cartItem) throw CustomException.notFound('cartItem')

    await this.cartItemRepository.softDelete(cartItemId)
  }
}
