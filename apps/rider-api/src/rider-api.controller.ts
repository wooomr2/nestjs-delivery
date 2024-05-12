import { Controller, Get } from '@nestjs/common'
import { RiderApiService } from './rider-api.service'

@Controller()
export class RiderApiController {
  constructor(private readonly riderApiService: RiderApiService) {}

  @Get()
  getHello(): string {
    return this.riderApiService.getHello()
  }
}
