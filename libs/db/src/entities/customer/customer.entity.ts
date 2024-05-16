import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  customerId: number

  @Column({ unique: true, comment: 'FK. 유저 id' })
  userId: string

  @Column({ comment: '핸드폰번호' })
  phone: string

  @Column({ comment: '주소' })
  address: string
}
