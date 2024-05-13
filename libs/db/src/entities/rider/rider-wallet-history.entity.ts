import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { WALLET_JOB_TYPE } from '../enums'

@Entity({ name: 'rider_wallet_histories' })
export class RiderWalletHistoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  id: number

  @Column({ comment: 'FK' })
  walletId: number

  @Column({ comment: 'FK' })
  riderId: number

  @Column({ type: 'enum', enum: WALLET_JOB_TYPE, comment: '이력 유형 - 입금, 출금' })
  walletJobType: WALLET_JOB_TYPE

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '입출금 금액' })
  money: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '잔고' })
  balance: number
}
