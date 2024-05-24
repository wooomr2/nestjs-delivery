import {
  Checkout,
  CheckoutDiscountItem,
  CheckoutItem,
  Discount,
  Order,
  OrderDiscountItem,
  OrderItem,
} from '@libs/db/entities'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { OrderController } from './order.controller'
import { OrderService } from './order.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Checkout,
      CheckoutItem,
      CheckoutDiscountItem,
      Order,
      OrderItem,
      OrderDiscountItem,
      Discount,
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
