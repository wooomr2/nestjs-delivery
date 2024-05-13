import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity()
export class OrderItem extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  itemId: number

  @Column({ comment: 'FK' })
  orderId: number

  @Column({ comment: 'FK' })
  menuId: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '주문 금액' })
  price: number

  @Column({ comment: '주문 수량' })
  quantity: number
}
