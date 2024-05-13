import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { SETTLEMENT_STATUS } from '../enums'

@Entity({ name: 'store_settlement_histories' })
export class StoreSettlementHistoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  id: number

  @Column({ comment: 'FK' })
  settlementId: number

  @Column({ comment: 'FK' })
  storeId: number

  @Column({ comment: 'FK' })
  orderId: number

  @Column({ comment: 'FK' })
  paymentId: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '주문 금액' })
  orderAmount: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '할인 금액' })
  discountAmount: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '배달 수수료' })
  deliveryFee: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '서비스 수수료' })
  serviceFee: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '프로모션 수수료' })
  promotionFee: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '총 결제금액' })
  paymentAmount: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '정산 금액' })
  settlementAmount: number

  @Column({
    type: 'enum',
    enum: SETTLEMENT_STATUS,
    default: SETTLEMENT_STATUS.WAIT,
    comment: '정산의 상태 (대기, 보류, 완료)',
  })
  settlementStatus: SETTLEMENT_STATUS
}
