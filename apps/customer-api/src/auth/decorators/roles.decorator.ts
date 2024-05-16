import { ROLE } from '@libs/db/entities'
import { SetMetadata } from '@nestjs/common'

export const ROLES_KEY = 'roles'
export const Roles = (...roles: ROLE[]) => SetMetadata(ROLES_KEY, roles)
