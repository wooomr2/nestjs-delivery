import { ResponseEntity } from '@libs/common/response.entity'
import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CurrentCustomer } from '../auth/decorators'
import { ICurrentCustomer } from '../auth/types'
import { CreateOrderReq } from './dto/req/CreateOrderReq'
import { OrderService } from './order.service'

@ApiTags('orders')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiOperation({ summary: '주문 생성 API' })
  @Post()
  async create(@Body() dto: CreateOrderReq, @CurrentCustomer() user: ICurrentCustomer) {
    const order = await this.orderService.create(dto, user)
    return ResponseEntity.OK_WITH(order)
  }
}
