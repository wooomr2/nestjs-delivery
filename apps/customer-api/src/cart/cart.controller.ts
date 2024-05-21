import { ResponseEntity } from '@libs/common/response.entity'
import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CartService } from './cart.service'
import { CartItemAddRequest } from './dto/request/CartItemAddRequest'
import { CartListQueryRequest } from './dto/request/CartListQueryRequest'
import { CartListResponse } from './dto/response/CartListResponse'
import { CartItemAddResponse } from './dto/response/CartItemAddResponse'

@ApiTags('carts')
@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: '장바구니 추가' })
  @Post('/')
  async add(@Body() dto: CartItemAddRequest) {
    const cartItem = await this.cartService.upsert(dto)

    return ResponseEntity.OK_WITH(new CartItemAddResponse(cartItem))
  }

  @ApiOperation({ summary: '장바구니 목록 요청' })
  @Get('/')
  async list(@Query() dto: CartListQueryRequest) {
    const { cart, cartItems } = await this.cartService.findByCustomerId(dto.customerId)
    const menuDtos = cartItems.map(c => c.cartMenuDto)

    return ResponseEntity.OK_WITH(new CartListResponse(cart.customerId, menuDtos))
  }

  @ApiOperation({ summary: '장바구니 아이템 제거' })
  @Delete('/')
  async remove(@Param('id') id: string) {
    // return await this.cartService.remove(+id)
  }
}
