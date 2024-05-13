import { DbModule } from '@libs/db/db.module'
import {
  Category,
  CategoryStoreMapping,
  Checkout,
  CheckoutDiscountItem,
  CheckoutItem,
  Customer,
  CustomerInfo,
  DeliveryRequest,
  Discount,
  Menu,
  Order,
  OrderDiscountItem,
  OrderItem,
  Payment,
  Rider,
  RiderInfo,
  RiderSettlement,
  RiderSettlementHistory,
  RiderWallet,
  RiderWalletHistory,
  Store,
  StoreContract,
  StoreInfo,
  StoreSettlement,
  StoreSettlementHistory,
  StoreWallet,
  StoreWalletHistory,
} from '@libs/db/entities'
import { Review } from '@libs/db/entities/review/review.entity'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { envValidation } from './validations/env.validation'

const nodeEnv = process.env.NODE_ENV || 'development'
console.log('=============  LOAD ENV : ' + nodeEnv + '  =============')
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: envValidation,
      envFilePath: [`.env.${nodeEnv}`],
    }),
    DbModule,
    TypeOrmModule.forFeature([
      Checkout,
      CheckoutItem,
      CheckoutDiscountItem,
      Customer,
      CustomerInfo,
      OrderDiscountItem,
      OrderItem,
      Order,
      RiderInfo,
      RiderSettlement,
      RiderSettlementHistory,
      RiderWallet,
      RiderWalletHistory,
      Rider,
      StoreInfo,
      StoreSettlement,
      StoreSettlementHistory,
      StoreWallet,
      StoreWalletHistory,
      Store,
      StoreContract,
      Category,
      CategoryStoreMapping,
      DeliveryRequest,
      Discount,
      Menu,
      Payment,
      Review,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
