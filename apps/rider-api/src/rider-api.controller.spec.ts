import { Test, TestingModule } from '@nestjs/testing'
import { RiderApiController } from './rider-api.controller'
import { RiderApiService } from './rider-api.service'

describe('RiderApiController', () => {
  let riderApiController: RiderApiController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RiderApiController],
      providers: [RiderApiService],
    }).compile()

    riderApiController = app.get<RiderApiController>(RiderApiController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(riderApiController.getHello()).toBe('Hello World!')
    })
  })
})
