import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class CartItemRemoveResponse {
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
}
