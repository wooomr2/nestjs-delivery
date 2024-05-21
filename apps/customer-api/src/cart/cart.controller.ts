import { ResponseEntity } from '@libs/common/response.entity'
import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CartService } from './cart.service'
import { CartMenuDto } from './dto/CartMenuDto'
import { CartItemAddRequest } from './dto/request/CartItemAddRequest'
import { CartItemRemoveRequest } from './dto/request/CartItemRemoveRequest'
import { CartListQueryRequest } from './dto/request/CartListQueryRequest'
import { CartItemAddResponse } from './dto/response/CartItemAddResponse'
import { CartListResponse } from './dto/response/CartListResponse'

@ApiTags('carts')
@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: '장바구니 추가' })
  @Post('/')
  async add(@Body() dto: CartItemAddRequest) {
    const cartItem = await this.cartService.upsert(dto)

    return ResponseEntity.OK_WITH(CartItemAddResponse.from(cartItem))
  }

  @ApiOperation({ summary: '장바구니 목록 요청' })
  @Get('/')
  async list(@Query() dto: CartListQueryRequest) {
    const { cart, cartItems } = await this.cartService.findByCustomerId(dto.customerId)
    const menuDtos = cartItems.map(cartItem => CartMenuDto.from(cartItem))

    return ResponseEntity.OK_WITH(CartListResponse.from(cart.customerId, menuDtos))
  }

  @ApiOperation({ summary: '장바구니 아이템 제거' })
  @Put('/')
  async remove(@Body() dto: CartItemRemoveRequest) {
    return await this.cartService.remove(dto.customerId, dto.cartItemId)
  }
}
