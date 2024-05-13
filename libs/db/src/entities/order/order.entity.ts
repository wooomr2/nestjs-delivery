import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { ORDER_STATUS } from '../enums'

@Entity({ name: 'orders' })
export class OrderEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  orderId: number

  @Column({ type: 'uuid', comment: '주문 UUID' })
  orderUUID: string

  @Column({ comment: 'FK' })
  checkoutId: number

  @Column({ comment: 'FK' })
  storeId: number

  @Column({ comment: 'FK' })
  customerId: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '주문 금액' })
  orderAmount: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '배달비' })
  deliveryFee: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '할인 금액' })
  discountAmount: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '최종 총 주문 금액' })
  totalAmount: number

  @Column({ type: 'enum', enum: ORDER_STATUS, default: ORDER_STATUS.PROCESSING })
  status: ORDER_STATUS
}
