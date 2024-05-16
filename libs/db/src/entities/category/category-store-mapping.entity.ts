import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity()
export class CategoryStoreMapping extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  id: number

  @Column({ comment: 'FK' })
  categoryId: number

  @Column({ comment: 'FK' })
  storeId: number
}
