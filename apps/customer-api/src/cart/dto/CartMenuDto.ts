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
  menuNmae: string

  @ApiProperty()
  @IsNotEmpty()
  menuImageUrl: string

  @ApiProperty()
  @IsNotEmpty()
  quantity: number

  @ApiProperty()
  @IsNotEmpty()
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
