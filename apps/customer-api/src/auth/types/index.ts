import { ROLE } from '@libs/db/entities'

export type JwtPayload = {
  sub: string // user.id
  email: string
  roles: ROLE[]
}

export type JwtPayloadWithRt = JwtPayload & { refreshToken: string }

export interface ICurrentUser {
  id: string
  email: string
  roles: ROLE[]
}

export interface ITokens {
  accessToken: string
  refreshToken: string
}
