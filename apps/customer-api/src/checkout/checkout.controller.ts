import { ResponseEntity } from '@libs/common/response.entity'
import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, forwardRef } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CartService } from '../cart/cart.service'
import { CheckoutService } from './checkout.service'
import { CheckoutRequest } from './dto/req/CheckoutRequest'

@ApiTags('checkouts')
@Controller('checkouts')
export class CheckoutController {
  constructor(
    private readonly checkoutService: CheckoutService,
    @Inject(forwardRef(() => CartService))
    private readonly cartService: CartService,
  ) {}

  @ApiOperation({ summary: '체크아웃 생성 API' })
  @Post()
  async create(@Body() dto: CheckoutRequest) {
    const { cartItems } = await this.cartService.findByCustomerId(dto.customerId)
    const checkout = await this.checkoutService.create(dto, cartItems)

    return ResponseEntity.OK_WITH(checkout)
  }

  @ApiOperation({ summary: '체크아웃 조회. 고객이 결제할 최종 정보 확인' })
  @Get(':customerId')
  async findOne(@Param('customerId', ParseIntPipe) customerId: number) {
    const checkoutDto = await this.checkoutService.findOne(customerId)

    return ResponseEntity.OK_WITH(checkoutDto)
  }
}
