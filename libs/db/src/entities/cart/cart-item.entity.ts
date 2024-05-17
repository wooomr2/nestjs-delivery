import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity()
export class CartItem extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  cartItemId: number

  @Column({ comment: 'FK' })
  cartId: number

  @Column({ comment: 'FK' })
  storeId: number

  @Column({ comment: 'FK' })
  menuId: number

  @Column({ comment: '수량' })
  quantity: number
}
