import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { MENU_STATUS } from '../enums'

@Entity()
export class Menu extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  menuId: number

  @Column({ comment: 'FK 상점 아이디' })
  storeId: number

  @Column({ comment: '상품명' })
  name: string

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '가격' })
  price: number

  @Column({ type: 'simple-array', comment: '상품 이미지' })
  images: string[]

  @Column({ comment: '상품 설명' })
  description: string

  @Column({ type: 'enum', enum: MENU_STATUS, comment: '상품 상태' })
  status: MENU_STATUS
}
