import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity({ name: 'checkouts' })
export class CheckoutEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  checkoutId: number

  @Column({ comment: 'FK' })
  storeId: number

  @Column({ comment: 'FK' })
  customerId: number
}
