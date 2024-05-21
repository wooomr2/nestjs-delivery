import { ApiProperty } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import { IsNotEmpty } from 'class-validator'

export class CartListQueryRequest {
  @ApiProperty()
  @IsNotEmpty()
  @Transform(v => {
    return parseInt(v.obj['customerId'])
  })
  customerId: number
}
