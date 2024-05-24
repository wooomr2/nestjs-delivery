import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import {
  Cart,
  CartItem,
  Category,
  CategoryStoreMapping,
  Checkout,
  CheckoutDiscountItem,
  CheckoutItem,
  Customer,
  DeliveryRequest,
  DeliveryRequestRiderMapping,
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
  User,
} from './entities'
import { Review } from './entities/review/review.entity'

export const typeOrmPostgresqlConfig = (config: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: config.get('DB_HOST'),
  port: config.get('DB_PORT'),
  username: config.get('DB_USERNAME'),
  password: config.get('DB_PASSWORD'),
  database: config.get('DB_DATABASE'),
  synchronize: config.get('DB_SYNCHRONIZE'), // CHECK:: Should be false in production
  autoLoadEntities: true,
  logging: ['query', 'error'],
  namingStrategy: new SnakeNamingStrategy(),
})

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => typeOrmPostgresqlConfig(config),
      inject: [ConfigService],
    }),
  ],
  exports: [
    TypeOrmModule,
    TypeOrmModule.forFeature([
      Cart,
      CartItem,
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
      User,
      DeliveryRequest,
      DeliveryRequestRiderMapping,
    ]),
  ],
})
export class DbModule {}
