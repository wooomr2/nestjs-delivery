import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { User } from '../user/user.entity'

@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  customerId: number

  @Column({ unique: true, type: 'uuid', comment: 'FK. 유저 id' })
  userId: string

  @Column({ comment: '이름' })
  name: string

  @Column({ comment: '핸드폰번호' })
  phone: string

  @Column({ comment: '주소' })
  address: string

  @OneToOne(() => User, user => user.customer)
  @JoinColumn()
  user: User
}
