import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity()
export class OrderDiscountItem extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  discountItemId: number

  @Column({ comment: 'FK' })
  orderId: number

  @Column({ comment: 'FK' })
  discountId: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '최종 할인 금액' })
  discountAmount: number
}
