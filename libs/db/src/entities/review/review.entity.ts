import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity()
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  id: number

  @Column({ comment: 'FK' })
  customerId: string

  @Column({ comment: 'FK' })
  storeId: number

  @Column({ comment: '별점' })
  rating: number

  @Column({ comment: '댓글' })
  comment: string
}
