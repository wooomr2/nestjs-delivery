import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from './base/base.entity'

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  categoryId: number

  @Column({ comment: '카테고리 이름' })
  name: string

  @Column({ comment: '카테고리 메인 이미지' })
  mainImage: string

  @Column({ comment: '카테고리 순서' })
  rank: number
}
