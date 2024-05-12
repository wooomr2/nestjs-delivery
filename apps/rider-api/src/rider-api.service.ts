import { Injectable } from '@nestjs/common'

@Injectable()
export class RiderApiService {
  getHello(): string {
    return 'Hello World!'
  }
}
