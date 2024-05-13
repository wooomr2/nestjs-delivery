import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

// @Entity({ name: 'checkout_discount_items' })
@Entity()
export class CheckoutDiscountItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  discountItemId: number

  @Column({ comment: 'FK' })
  checkoutId: number

  @Column({ comment: 'FK' })
  discountId: number
}
