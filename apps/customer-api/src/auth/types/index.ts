import { ROLE } from '@libs/db/entities'

export type JwtPayload = {
  sub: string // user.id
  email: string
  roles: ROLE[]
  serviceId: number
}

export type JwtPayloadWithRt = JwtPayload & { refreshToken: string }

export interface ICurrentUser {
  id: string
  email: string
  roles: ROLE[]
}

export interface ICurrentCustomer extends ICurrentUser {
  customerId: number
}

export interface ITokens {
  accessToken: string
  refreshToken: string
}
