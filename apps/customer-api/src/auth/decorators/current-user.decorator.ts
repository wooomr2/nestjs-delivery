import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { ICurrentCustomer, ICurrentUser, JwtPayloadWithRt } from '../types'

export const CurrentUser = createParamDecorator(
  (data: keyof JwtPayloadWithRt, context: ExecutionContext): ICurrentUser => {
    const request = context.switchToHttp().getRequest()

    const currentUser: ICurrentUser = {
      id: request.user.sub,
      email: request.user.email,
      roles: request.user.roles,
    }
    console.log('currentUser', currentUser)
    return currentUser
  },
)

export const CurrentCustomer = createParamDecorator(
  (data: keyof JwtPayloadWithRt, context: ExecutionContext): ICurrentCustomer => {
    const request = context.switchToHttp().getRequest()

    const currentCustomer: ICurrentCustomer = {
      id: request.user.sub,
      email: request.user.email,
      roles: request.user.roles,
      customerId: request.user.serviceId,
    }

    console.log('currentUser', currentCustomer)
    return currentCustomer
  },
)
