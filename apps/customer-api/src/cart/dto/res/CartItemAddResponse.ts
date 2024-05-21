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
}
