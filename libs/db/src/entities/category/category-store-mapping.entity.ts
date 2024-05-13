import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity()
export class CategoryStoreMapping extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  id: number

  @Column({ comment: 'PK' })
  categoryId: number
}
