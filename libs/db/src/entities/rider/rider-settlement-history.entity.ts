import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { SETTLEMENT_STATUS } from '../enums'

@Entity({ name: 'rider_settlement_histories' })
export class RiderSettlementHistoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  id: number

  @Column({ comment: 'FK' })
  settlementId: number

  @Column({ comment: 'FK' })
  riderId: number

  @Column({ comment: 'FK' })
  orderId: number

  @Column({ comment: 'FK. 주문에 대한 배달 id' })
  orderedDeliveryId: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '배달료 수익' })
  deliveryFee: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '배달 미션 프로모션 금액' })
  deliveryPromotionFee: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '정산 금액' })
  settlementAmount: number

  @Column({
    type: 'enum',
    enum: SETTLEMENT_STATUS,
    comment: '정산의 상태 (대기, 보류, 완료)',
  })
  settlementStatus: SETTLEMENT_STATUS
}
