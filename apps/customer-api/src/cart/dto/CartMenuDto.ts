import { CartItem } from '@libs/db/entities'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CartMenuDto {
  @ApiProperty()
  @IsNotEmpty()
  cartItemId: number

  @ApiProperty()
  @IsNotEmpty()
  menuId: number

  @ApiProperty()
  @IsNotEmpty()
  menuName: string

  @ApiProperty()
  @IsNotEmpty()
  menuImageUrl: string

  @ApiProperty()
  @IsNotEmpty()
  quantity: number

  @ApiProperty()
  @IsNotEmpty()
  totalPrice: number

  static from(cartItem: CartItem): CartMenuDto {
    return {
      cartItemId: cartItem.cartItemId,
      menuId: cartItem.menuId,
      menuName: cartItem.menu.name,
      menuImageUrl: cartItem.menu.images[0],
      quantity: cartItem.quantity,
      totalPrice: +(cartItem.menu.price * cartItem.quantity).toFixed(2),
    }
  }
}
