import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from './base/base.entity'

@Entity({ name: 'category_store_mappings' })
export class CategoryStoreMappingEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  id: number

  @Column({ comment: 'PK' })
  categoryId: number
}
