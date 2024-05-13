import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from './base/base.entity'
import { DELIVERY_STATUS } from './enums'

// Order 생성 => message 수신 후 사장님이 배달요청을 생성
// Rider가 배달대기중인 배달요청을 수락하면 riderId가 등록되고 status가 DELIVERY_ACCEPTED(배차완료)로 변경
@Entity({ name: 'delivery_requests' })
export class DeliveryRequestEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  deliveryRequestId: number

  @Column({ comment: 'FK' })
  orderId: number

  @Column({ comment: 'FK' })
  storeId: number

  @Column({ comment: 'FK' })
  customerId: number

  @Column({ type: Number, nullable: true, comment: '배송자 ID' })
  riderId?: number | null

  @Column({ comment: '매장 주소' })
  storeAddress: string

  @Column({ comment: '고객 배달지 주소' })
  deliveryAddress: string

  @Column({ comment: '예상 조리 시간(분)' })
  cookingMinute: number

  @Column({ comment: '픽업 요청 시간(분)' })
  pickupMinute: number

  @Column({ type: 'enum', enum: DELIVERY_STATUS, default: DELIVERY_STATUS.READY, comment: '주문 배달 상태' })
  status: DELIVERY_STATUS

  @Column({ comment: '배달 수수료' })
  deliveryFee: number
}
