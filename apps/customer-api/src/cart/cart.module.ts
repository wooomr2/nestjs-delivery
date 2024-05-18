import { Cart, CartItem } from '@libs/db/entities'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CartController } from './cart.controller'
import { CartService } from './cart.service'
import { CartItemService } from './cartItem.service'

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartItem])],
  controllers: [CartController],
  providers: [CartService, CartItemService],
})
export class CartModule {}
