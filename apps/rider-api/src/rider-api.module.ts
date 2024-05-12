import { Module } from '@nestjs/common'
import { RiderApiController } from './rider-api.controller'
import { RiderApiService } from './rider-api.service'

@Module({
  imports: [],
  controllers: [RiderApiController],
  providers: [RiderApiService],
})
export class RiderApiModule {}
