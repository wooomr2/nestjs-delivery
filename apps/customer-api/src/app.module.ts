import { DbModule } from '@libs/db/db.module'
import {
  CategoryEntity,
  CategoryStoreMappingEntity,
  CheckoutDiscountItemEntity,
  CheckoutEntity,
  CheckoutItemEntity,
  CustomerEntity,
  CustomerInfoEntity,
  DeliveryRequestEntity,
  DiscountEntity,
  MenuEntity,
  OrderDiscountItemEntity,
  OrderEntity,
  OrderItemEntity,
  PaymentEntity,
  RiderEntity,
  RiderInfoEntity,
  RiderSettlementEntity,
  RiderSettlementHistoryEntity,
  RiderWalletEntity,
  RiderWalletHistoryEntity,
  StoreEntity,
  StoreInfoEntity,
  StoreSettlementEntity,
  StoreSettlementHistoryEntity,
  StoreWalletEntity,
  StoreWalletHistoryEntity,
} from '@libs/db/entities'
import { StoreContractEntity } from '@libs/db/entities/store/store-contract.entity'
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
      CheckoutEntity,
      CheckoutItemEntity,
      CheckoutDiscountItemEntity,
      CustomerEntity,
      CustomerInfoEntity,
      OrderDiscountItemEntity,
      OrderItemEntity,
      OrderEntity,
      RiderInfoEntity,
      RiderSettlementEntity,
      RiderSettlementHistoryEntity,
      RiderWalletEntity,
      RiderWalletHistoryEntity,
      RiderEntity,
      StoreInfoEntity,
      StoreSettlementEntity,
      StoreSettlementHistoryEntity,
      StoreWalletEntity,
      StoreWalletHistoryEntity,
      StoreEntity,
      StoreContractEntity,
      CategoryEntity,
      CategoryStoreMappingEntity,
      DeliveryRequestEntity,
      DiscountEntity,
      MenuEntity,
      PaymentEntity,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
