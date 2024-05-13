import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity()
export class CustomerInfo extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  customerInfoId: number

  @Column({ comment: 'FK' })
  customerId: number

  @Column({ comment: '핸드폰번호' })
  phone: string

  @Column({ comment: '주소' })
  address: string
}
