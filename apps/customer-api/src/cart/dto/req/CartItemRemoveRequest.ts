import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CartItemRemoveRequest {
  @ApiProperty()
  @IsNotEmpty()
  cartItemId: number

  @ApiProperty()
  @IsNotEmpty()
  customerId: number
}
