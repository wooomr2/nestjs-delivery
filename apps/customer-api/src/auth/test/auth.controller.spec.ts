import { Test, TestingModule } from '@nestjs/testing'
import { AuthController } from '../auth.controller'
import { AuthService } from '../auth.service'
import { SignupReq } from '../dto/req/signup.req.'

jest.mock('../auth.service.ts')

describe('AuthController', () => {
  let authController: AuthController
  let authService: AuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile()

    authController = module.get<AuthController>(AuthController)
    authService = module.get<AuthService>(AuthService)
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(authController).toBeDefined()
  })

  describe('회원가입 signup', () => {
    const signupReq: SignupReq = {
      email: 'email',
      password: 'password',
      name: 'name',
      phone: 'phone',
      address: 'address',
    }

    beforeEach(async () => {
      await authController.signup(signupReq)
    })

    test('authService 호출', async () => {
      expect(authService.signup).toHaveBeenCalled()
    })
  })
})
