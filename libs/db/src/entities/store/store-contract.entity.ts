import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { CONTRACT_TYPE } from '../enums'

@Entity({ name: 'store_contracts' })
export class StoreContractEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  contractId: number

  @Column({ comment: '상점 ID' })
  storeId: number

  @Column({ comment: '계약 시작일' })
  startDate: Date

  @Column({ comment: '계약 종료일' })
  endDate: Date

  @Column({ type: 'enum', enum: CONTRACT_TYPE, comment: '계약 유형' })
  contractType: CONTRACT_TYPE

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '수수료율' })
  feeRate: number
}
