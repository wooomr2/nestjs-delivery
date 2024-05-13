import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity()
export class Checkout extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  checkoutId: number

  @Column({ comment: 'FK' })
  storeId: number

  @Column({ comment: 'FK' })
  customerId: number
}
