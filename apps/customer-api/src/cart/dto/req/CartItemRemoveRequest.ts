import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class CartItemRemoveRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  cartItemId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  customerId: number
}
