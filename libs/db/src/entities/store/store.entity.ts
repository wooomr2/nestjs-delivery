import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { BANK_CODE, STORE_STATUS } from '../enums'

@Entity()
export class Store extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  storeId: number

  @Column({ unique: true, comment: 'FK. 유저 id' })
  userId: string

  @Column({ comment: '사업자 번호' })
  businessNo: string

  @Column({ comment: '상점명' })
  storeName: string

  @Column({ comment: '상점 주소' })
  storeAddress: string

  @Column({ comment: '상점 대표 폰번호' })
  storePhone: string

  @Column({ comment: '상점 대표 이메일' })
  storeEmail: string

  @Column({ comment: '상점 상세 설명' })
  description: string

  @Column({ type: 'simple-array', comment: '상점 이미지' })
  images: string[]

  @Column({ type: 'enum', enum: BANK_CODE, comment: '은행 코드' })
  bankCode: BANK_CODE

  @Column({ comment: '은행 계좌번호' })
  bankAccount: string

  @Column({ comment: '은행 계좌명' })
  bankAccountName: string

  @Column({ comment: '평균 배달 시간' })
  deliveryTime: string

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '배달 수수료' })
  deliveryFee: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '최소 주문 금액' })
  minimumPrice: number

  @Column({
    type: 'enum',
    enum: STORE_STATUS,
    default: STORE_STATUS.INIT,
    comment: '[INIT(신규매장 준비중) READY(오픈 준비중) SALE(판매중) CLOSE(판매종료)]',
  })
  status: STORE_STATUS

  // TODO:: 리뷰 별도로 빼자
  @Column({ comment: '평점' })
  reviewGrade: number
}
