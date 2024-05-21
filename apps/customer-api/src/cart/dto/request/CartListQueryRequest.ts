import { ApiProperty } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import { IsNotEmpty } from 'class-validator'

export class CartListQueryRequest {
  @ApiProperty()
  @IsNotEmpty()
  @Transform(value => Number(value))
  customerId: number
}
