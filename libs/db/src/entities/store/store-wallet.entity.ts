import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity({ name: 'store_wallets' })
export class StoreWalletEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  walletId: number

  @Column({ comment: 'FK' })
  storeId: number

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '예금' })
  deposit: number
}
