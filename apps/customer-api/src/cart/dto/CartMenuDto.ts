import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CartMenuDto {
  @ApiProperty()
  @IsNotEmpty()
  cartItemId: number

  @ApiProperty()
  @IsNotEmpty()
  menuId: number

  @ApiProperty()
  @IsNotEmpty()
  menuName: string

  @ApiProperty()
  @IsNotEmpty()
  menuImageUrl: string

  @ApiProperty()
  @IsNotEmpty()
  quantity: number

  @ApiProperty()
  @IsNotEmpty()
  totalPrice: number
}
