import { CartItem } from '@libs/db/entities'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CartItemAddResponse {
  @ApiProperty()
  @IsNotEmpty()
  storeId: number

  @ApiProperty()
  @IsNotEmpty()
  menuId: number

  @ApiProperty()
  @IsNotEmpty()
  quantity: number

  constructor(cartItem: CartItem) {
    this.storeId = cartItem.storeId
    this.menuId = cartItem.menuId
    this.quantity = cartItem.quantity
  }
}
