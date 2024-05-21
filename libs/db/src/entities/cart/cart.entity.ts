import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity()
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  cartId: number

  @Column({ comment: 'FK' })
  customerId: number
}
