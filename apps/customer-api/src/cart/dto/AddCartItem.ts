import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class AddCartItem {
  @ApiProperty()
  @IsNotEmpty()
  menuId: number

  @ApiProperty()
  @IsNotEmpty()
  customerId: number

  @ApiProperty()
  @IsNotEmpty()
  storeId: number

  @ApiProperty()
  @IsNotEmpty()
  quantity: number
}
