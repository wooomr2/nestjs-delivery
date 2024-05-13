import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from './base/base.entity'
import { DISCOUNT_METHOD, DISCOUNT_TYPE } from './enums'

@Entity()
export class Discount extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  discountId: number

  @Column({ type: 'enum', enum: DISCOUNT_TYPE, comment: '할인유형' })
  type: DISCOUNT_TYPE

  @Column({ type: 'enum', enum: DISCOUNT_METHOD, comment: '[FIXED_RATE(정률), FIXED_AMOUND(정액)]' })
  method: DISCOUNT_METHOD

  @Column({ type: 'smallint', comment: '할인 가격/율' })
  value: number

  @Column({ type: 'timestamptz', comment: '할인 시작일' })
  startDate: Date

  @Column({ type: 'timestamptz', comment: '할인 만료일' })
  expireDate: Date

  @Column({ type: 'boolean', comment: '활성화 여부' })
  isAvailable: boolean
}
