import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class AddCartReq {
  @ApiProperty()
  @IsNotEmpty()
  storeId: number

  @ApiProperty()
  @IsNotEmpty()
  menuId: number

  @ApiProperty()
  @IsNotEmpty()
  customerId: number

  @ApiProperty()
  @IsNotEmpty()
  quantity: number
}
