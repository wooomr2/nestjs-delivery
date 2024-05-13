import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity()
export class CheckoutItem extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  itemId: number

  @Column({ comment: 'FK' })
  checkoutId: number

  @Column({ comment: 'FK' })
  menuId: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '금액' })
  price: number

  @Column({ comment: '수량' })
  quantity: number
}
