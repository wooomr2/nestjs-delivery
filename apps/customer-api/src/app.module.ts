import { HttpExceptionFilter } from '@libs/common/filters'
import { DbModule } from '@libs/db/db.module'
import {
  Category,
  CategoryStoreMapping,
  Checkout,
  CheckoutDiscountItem,
  CheckoutItem,
  Customer,
  DeliveryRequest,
  Discount,
  Menu,
  Order,
  OrderDiscountItem,
  OrderItem,
  Payment,
  Rider,
  RiderSettlement,
  RiderSettlementHistory,
  RiderWallet,
  RiderWalletHistory,
  Store,
  StoreContract,
  StoreSettlement,
  StoreSettlementHistory,
  StoreWallet,
  StoreWalletHistory,
} from '@libs/db/entities'
import { Review } from '@libs/db/entities/review/review.entity'
import { Module, ValidationPipe } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { JwtAccessGuard } from './auth/guards'
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
      OrderDiscountItem,
      OrderItem,
      Order,
      RiderSettlement,
      RiderSettlementHistory,
      RiderWallet,
      RiderWalletHistory,
      Rider,
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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAccessGuard,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ whitelist: true, transform: true }),
    },
  ],
})
export class AppModule {}
