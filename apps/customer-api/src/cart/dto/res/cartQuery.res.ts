import { CartItem } from '@libs/db/entities'

export class CartQueryRespnse {
  cartId: number
  customerId: number
  cartItems: CartItem[]
}
