import { CartItem } from '@libs/db/entities'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, ValidateNested } from 'class-validator'

export class CartQueryResponse {
  @ApiProperty()
  @IsNotEmpty()
  customerId: string

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => CartItem)
  @ValidateNested()
  cartItems: CartItem[]
}
