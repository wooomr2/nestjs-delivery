import { CartItem } from '@libs/db/entities'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class CartItemAddResponse {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  storeId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  menuId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  quantity: number

  static from(cartItem: CartItem) {
    const response = new CartItemAddResponse()
    response.storeId = cartItem.storeId
    response.menuId = cartItem.menuId
    response.quantity = cartItem.quantity

    return response
  }
}
