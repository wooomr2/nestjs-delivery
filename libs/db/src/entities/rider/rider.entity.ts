import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { RIDER_ROLE, RIDER_STATUS } from '../enums'

@Entity({ name: 'riders' })
export class RiderEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  riderId: number

  @Column({ unique: true, comment: '이메일' })
  email: string

  @Column({ comment: '비밀번호' })
  password: string

  @Column({
    type: 'enum',
    enum: RIDER_STATUS,
    default: RIDER_STATUS.ACTIVE,
    comment: '상태: ACTIVE(활성화), INACTIVE(비활성화)',
  })
  status: RIDER_STATUS

  @Column({ type: 'enum', enum: RIDER_ROLE, default: RIDER_ROLE.BASIC })
  role: RIDER_ROLE

  @Column({ type: String, nullable: true })
  refreshToken: string | null
}
