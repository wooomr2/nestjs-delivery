import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { Customer } from '../customer/customer.entity'
import { ROLE, USER_STATUS } from '../enums'

/** 통합 유저 계정 테이블 */
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { comment: 'PK' })
  id: string

  @Column({ unique: true, comment: '이메일' })
  email: string

  @Column({ comment: '비밀번호' })
  password: string

  @Column({
    type: 'enum',
    enum: ROLE,
    array: true,
    default: [ROLE.CUSTOMER],
    comment: '상태: CUSTOMER, RIDER, STORE, ADMIN',
  })
  roles: ROLE[]

  @Column({
    type: 'enum',
    enum: USER_STATUS,
    default: USER_STATUS.ACTIVE,
    comment: '상태: ACTIVE(회원), DORMANT(휴면), WITHDRAWAL(탈퇴)',
  })
  status: USER_STATUS

  // Erorr:: DataTypeNotSupportedError: Data type "Object"
  // 참고:: strcitMode에서 nullable한경우 명시적으로 typeorm type선언 필요함.
  @Column({ type: String, nullable: true })
  refreshToken: string | null

  // Associations
  @OneToOne(() => Customer, customer => customer.user)
  customer: Customer
}
