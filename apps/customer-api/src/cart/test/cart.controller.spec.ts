import { Test, TestingModule } from '@nestjs/testing'
import { CartController } from '../cart.controller'
import { CartService } from '../cart.service'

describe('CartController', () => {
  let cartController: CartController
  let cartService: CartService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [CartService],
    }).compile()

    cartController = module.get<CartController>(CartController)
    cartService = module.get<CartService>(CartService)
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(cartController).toBeDefined()
    expect(cartService).toBeDefined()
  })

  describe('add, 카트 아이템 추가', () => {})
})
