import { CustomException } from '@libs/common'
import { Customer } from '@libs/db/entities'
import { User } from '@libs/db/entities/user/user.entity'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import { compare, genSalt, hash } from 'bcrypt'
import { DataSource, Repository } from 'typeorm'
import { SigninReq } from './dto/req/signin.req'
import { SignupReq } from './dto/req/signup.req.'
import { ICurrentUser, ITokens, JwtPayload } from './types'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    private readonly dataSource: DataSource,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  // TODO:: 주석 삭제할것
  // 체크 로직만으로는 동시성 문제가 해결x. But 회원가입에서 이런 동시성 문제는 진짜 거의 터질일이 없습니다.
  // 따라서 DB에서 동시성 문제가 발생하면(Unique 제약조건 위배) 따로 catch로 잡지말고,
  // 그냥 공통 예외로 컨트롤러 끝까지 보내서 공통 예외로 처리되도록 만듭니다. 그리고 공통 예외 처리에서 고객에게는 시스템에 문제가 있습니다.
  // 정도로 뿌리고 대신 디버깅을위해 시스템에 로그로 자세히 남기는 정도로 마무리하는게 best.
  async signup(dto: SignupReq): Promise<void> {
    await this.dataSource.transaction(async manager => {
      const emailExists = await manager.getRepository(User).exists({ where: { email: dto.email } })
      if (emailExists) throw CustomException.emailExists()

      dto.password = await hash(dto.password, await genSalt(10))

      const user = await manager.getRepository(User).save(this.userRepository.create(dto))

      await manager
        .getRepository(Customer)
        .save(
          this.customerRepository.create({ userId: user.id, name: dto.name, phone: dto.phone, address: dto.address }),
        )
    })
  }

  async signin(dto: SigninReq): Promise<ITokens> {
    const user = await this.userRepository.findOne({
      where: { email: dto.email },
    })
    if (!user) throw CustomException.invalidUser()

    const matchPassword = await compare(dto.password, user.password)
    if (!matchPassword) throw CustomException.invalidPassword()

    const tokens = this.#generateTokens(user)
    await this.userRepository.update({ id: user.id }, { refreshToken: tokens.refreshToken })

    return tokens
  }

  async logout(currentUser: ICurrentUser): Promise<void> {
    await this.userRepository.update({ id: currentUser.id }, { refreshToken: null })
  }

  async tokenRefresh(currentUser: ICurrentUser, refreshToken: string): Promise<ITokens> {
    const user = await this.userRepository.findOneBy({ id: currentUser.id })

    if (!user || !user.refreshToken || user.refreshToken !== refreshToken) {
      throw CustomException.accessDenied()
    }

    const tokens = this.#generateTokens(user)
    await this.userRepository.update({ id: user.id }, { refreshToken: tokens.refreshToken })

    return tokens
  }

  #generateTokens({ id, email, roles }: User): ITokens {
    if (!id || !email || !roles || roles.length < 1) {
      throw new InternalServerErrorException('Token generation failed')
    }

    const jwtPayload: JwtPayload = { sub: id, email: email, roles: roles }

    const accessToken = this.jwtService.sign(jwtPayload, {
      secret: this.config.getOrThrow('ACCESS_TOKEN_SECRET'),
      expiresIn: this.config.getOrThrow('ACCESS_TOKEN_EXPIRE'),
    })

    const refreshToken = this.jwtService.sign(jwtPayload, {
      secret: this.config.getOrThrow('REFRESH_TOKEN_SECRET'),
      expiresIn: this.config.getOrThrow('REFRESH_TOKEN_EXPIRE'),
    })

    return { accessToken, refreshToken }
  }
}
