import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, ValidateNested } from 'class-validator'
import { CartMenuDto } from '../CartMenuDto'

export class CartListResponse {
  @ApiProperty()
  @IsNotEmpty()
  customerId: number

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => CartMenuDto)
  @ValidateNested()
  cartMenuList: CartMenuDto[]

  static from(customerId: number, cartMenuList: CartMenuDto[]) {
    const response = new CartListResponse()
    response.customerId = customerId
    response.cartMenuList = cartMenuList
    return response
  }
}
