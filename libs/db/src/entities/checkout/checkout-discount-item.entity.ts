import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { Discount } from '../discount/discount.entity'

@Entity()
export class CheckoutDiscountItem extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  discountItemId: number

  @Column({ comment: 'FK' })
  checkoutId: number

  @Column({ comment: 'FK' })
  discountId: number

  @ManyToOne(() => Discount, d => d.discountId)
  discount: Discount
}
