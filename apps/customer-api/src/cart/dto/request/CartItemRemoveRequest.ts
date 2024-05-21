import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class CartItemRemoveRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  customerId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  cartItemId: number
}
