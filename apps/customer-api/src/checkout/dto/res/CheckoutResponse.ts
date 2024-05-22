import { CheckoutItem } from '@libs/db/entities'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsNumber, ValidateNested } from 'class-validator'
import { CheckoutDto } from '../CheckoutDto'

export class CheckoutResponse {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  customerId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  checkoutId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  totalAmount: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => CheckoutItem)
  @ValidateNested()
  checkoutItems: CheckoutItem[]

  constructor(dto: CheckoutDto) {
    this.customerId = dto.customerId
    this.checkoutId = dto.checkoutId
    this.totalAmount = dto.totalAmount
    this.checkoutItems = dto.checkoutItems
  }
}
