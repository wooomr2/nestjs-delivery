import { CartMenuDto } from 'apps/customer-api/src/cart/dto/CartMenuDto'
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'
import { Menu } from '../menu/menu.entity'

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

  @OneToOne(() => Menu)
  @JoinColumn()
  menu: Menu

  get cartMenuDto(): CartMenuDto {
    return {
      cartItemId: this.cartItemId,
      menuId: this.menuId,
      menuName: this.menu.name,
      menuImageUrl: this.menu.images[0],
      quantity: this.quantity,
      totalPrice: +(this.menu.price * this.quantity).toFixed(2),
    }
  }
}
