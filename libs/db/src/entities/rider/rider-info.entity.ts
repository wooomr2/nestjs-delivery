import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { TRANSPORTATION } from '../enums'

@Entity({ name: 'rider_infos' })
export class RiderInfoEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  riderInfoId: number

  @Column({ comment: 'FK' })
  riderId: number

  @Column({ comment: '핸드폰번호' })
  phone: string

  @Column({ type: 'enum', enum: TRANSPORTATION, comment: '배달수단' })
  transportation: TRANSPORTATION

  @Column({ comment: '배달지, 배달구역' })
  deliveryZone: string

  @Column({ comment: '은행 식별 코드' })
  bankCode: string

  @Column({ comment: '은행계좌' })
  bankAccount: string

  @Column({ comment: '은행명' })
  bankAccountName: string
}
