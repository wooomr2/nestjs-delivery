import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from './base/base.entity'
import { PAYMENT_METHOD, PAYMENT_STATUS } from './enums'

@Entity({ name: 'payments' })
export class PaymentEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  paymentId: number

  @Column({ comment: '주문서 ID' })
  orderId: number

  @Column({ comment: '결제 고객 ID' })
  customerId: number

  @Column({ comment: '상점 ID' })
  storeId: number

  @Column({ comment: 'PG 업체 ID' })
  pgId: number

  @Column({ comment: 'PG 업체의 결제 ID' })
  pgPaymentId: string

  @Column({ enum: PAYMENT_METHOD, default: PAYMENT_METHOD.CARD, comment: '결제 수단' })
  paymentMethod: string

  @Column({ type: 'decimal', precision: 10, scale: 0, comment: '결제 금액' })
  payAmount: number

  @Column({ type: 'enum', enum: PAYMENT_STATUS, comment: '결제 상태' })
  status: PAYMENT_STATUS
}
