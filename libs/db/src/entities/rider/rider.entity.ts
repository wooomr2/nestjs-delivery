import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { BANK_CODE, TRANSPORTATION } from '../enums'

@Entity()
export class Rider extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  riderId: number

  @Column({ unique: true, comment: 'FK. 유저 id' })
  userId: string

  @Column({ comment: '핸드폰번호' })
  phone: string

  @Column({ type: 'enum', enum: TRANSPORTATION, comment: '배달수단' })
  transportation: TRANSPORTATION

  @Column({ comment: '배달지, 배달구역' })
  deliveryZone: string

  @Column({ type: 'enum', enum: BANK_CODE, comment: '은행 코드' })
  bankCode: BANK_CODE

  @Column({ comment: '은행계좌' })
  bankAccount: string

  @Column({ comment: '은행명' })
  bankAccountName: string
}
