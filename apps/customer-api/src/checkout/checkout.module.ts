import { Cart, CartItem, Checkout, CheckoutDiscountItem, CheckoutItem, Discount } from '@libs/db/entities'
import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CartModule } from '../cart/cart.module'
import { CheckoutController } from './checkout.controller'
import { CheckoutService } from './checkout.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([Checkout, CheckoutItem, CheckoutDiscountItem, Cart, CartItem, Discount]),
    forwardRef(() => CartModule),
  ],
  controllers: [CheckoutController],
  providers: [CheckoutService],
})
export class CheckoutModule {}
