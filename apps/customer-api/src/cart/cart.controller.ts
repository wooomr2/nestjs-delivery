import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CartService } from './cart.service'
import { AddCartReq } from './dto/req/add-cart.req'
import { CartItemService } from './cartItem.service'
import { CartQueryRequest } from './dto/req/cartQuery.req'

@ApiTags('carts')
@Controller('carts')
export class CartController {
  constructor(
    private readonly cartService: CartService,
    private readonly cartItemService: CartItemService,
  ) {}

  @ApiOperation({ summary: '장바구니 추가' })
  @Post('/items')
  upsert(@Body() addCartReq: AddCartReq) {
    return this.cartService.upsert(addCartReq)
  }

  @ApiOperation({ summary: '장바구니 목록' })
  @Get('/items')
  list(@Query() cartQueryRequest: CartQueryRequest) {
    return this.cartService.findByCustomerId()
  }

  @ApiOperation({ summary: '장바구니 아이템 제거' })
  @Delete('/items')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id)
  }
}
