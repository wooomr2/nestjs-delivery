import { NestFactory } from '@nestjs/core'
import { RiderApiModule } from './rider-api.module'

async function bootstrap() {
  const app = await NestFactory.create(RiderApiModule)
  await app.listen(3000)
}
bootstrap()
