import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CartQueryRequest {
  @ApiProperty()
  @IsNotEmpty()
  customerId: number
}
