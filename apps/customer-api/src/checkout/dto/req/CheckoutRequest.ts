import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class CheckoutRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  customerId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  storeId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  discountId: number
}
