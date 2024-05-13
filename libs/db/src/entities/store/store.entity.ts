import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../base/base.entity'

@Entity({ name: 'stores' })
export class StoreEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  storeId: number

  @Column({ unique: true, comment: '관리자명' })
  email: string

  @Column({ comment: '비밀번호' })
  password: string

  @Column({ type: String, nullable: true })
  refreshToken: string | null
}
