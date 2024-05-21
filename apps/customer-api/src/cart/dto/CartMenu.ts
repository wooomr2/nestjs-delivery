export class CartMenu {
  cartItemId: number
  menuId: number
  menuNmae: string
  menuImageUrl: string
  quantity: number
  totalPrice: number

  static fromEntity(cartItem: CartMenu): CartMenuDto {
    return {
      cartItemId: cartItem.cartItemId,
      menuId: cartItem.menuId,
      menuNmae: cartItem.menuName,
      menuImageUrl: cartItem.menuImageUrl,
      quantity: cartItem.quantity,
      totalPrice: cartItem.totalPrice,
    }
  }
}
