import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class CreateOrderReq {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  checkoutId: number
}
