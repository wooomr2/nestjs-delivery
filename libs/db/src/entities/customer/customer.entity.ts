import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { CUSTOMER_ROLE, CUSTOMER_STATUS } from '../enums'

@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  customerId: number

  @Column({ unique: true, comment: '이메일' })
  email: string

  @Column({ comment: '비밀번호' })
  password: string

  @Column({
    type: 'enum',
    enum: CUSTOMER_STATUS,
    default: CUSTOMER_STATUS.ACTIVE,
    comment: '상태: ACTIVE(회원), DORMANT(휴면), WITHDRAWAL(탈퇴)',
  })
  status: CUSTOMER_STATUS

  @Column({ type: 'enum', enum: CUSTOMER_ROLE, default: CUSTOMER_ROLE.BASIC })
  role: CUSTOMER_ROLE

  // Erorr:: DataTypeNotSupportedError: Data type "Object"
  // 참고:: strcitMode에서 nullable한경우 명시적으로 typeorm type선언 필요함.
  @Column({ type: String, nullable: true })
  refreshToken: string | null
}
