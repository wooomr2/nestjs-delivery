import { ResponseEntity } from '@libs/common/response.entity'
import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CurrentCustomer } from '../auth/decorators'
import { ICurrentCustomer } from '../auth/types'
import { CartService } from './cart.service'
import { CartItemAddRequest } from './dto/req/CartItemAddRequest'
import { CartItemRemoveRequest } from './dto/req/CartItemRemoveRequest'
import { CartListQueryRequest } from './dto/req/CartListQueryRequest'
import { CartItemAddResponse } from './dto/res/CartItemAddResponse'
import { CartListResponse } from './dto/res/CartListResponse'

@ApiTags('carts')
@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: '장바구니 추가' })
  @Post('/')
  async add(@Body() dto: CartItemAddRequest, @CurrentCustomer() user: ICurrentCustomer) {
    const cartItem = await this.cartService.upsert(dto, user.customerId)

    return ResponseEntity.OK_WITH(CartItemAddResponse.from(cartItem))
  }

  @ApiOperation({ summary: '장바구니 목록 요청' })
  @Get('/')
  async list(@Query() dto: CartListQueryRequest, @CurrentCustomer() user: ICurrentCustomer) {
    const { cart, cartItems } = await this.cartService.findByCustomerId(user.customerId)

    return ResponseEntity.OK_WITH(CartListResponse.from(cart.customerId, cartItems))
  }

  @ApiOperation({ summary: '장바구니 아이템 제거' })
  @Put('/')
  async remove(@Body() dto: CartItemRemoveRequest, @CurrentCustomer() user: ICurrentCustomer) {
    await this.cartService.remove(user.customerId, dto.cartItemId)

    return ResponseEntity.OK()
  }
}
