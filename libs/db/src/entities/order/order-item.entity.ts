import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { Order } from './order.entity'

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

  @ManyToOne(() => Order, order => order.orderItems)
  @JoinColumn({ name: 'order_id' })
  order: Order
}
