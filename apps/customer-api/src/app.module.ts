import { LogInterceptor } from '@libs/common'
import { HttpExceptionFilter } from '@libs/common/filters'
import { DbModule } from '@libs/db/db.module'
import { ClassSerializerInterceptor, Module, Scope, ValidationPipe } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { JwtAccessGuard } from './auth/guards'
import { CartModule } from './cart/cart.module'
import { CheckoutModule } from './checkout/checkout.module'
import { OrderModule } from './order/order.module'
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
    AuthModule,
    CartModule,
    CheckoutModule,
    OrderModule,
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
    // Serialize response
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: LogInterceptor,
    },
  ],
})
export class AppModule {}
