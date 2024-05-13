import { CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from 'typeorm'

@Entity()
export class BaseEntity {
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: true, comment: '생성일' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: true, comment: '수정일' })
  updatedAt: Date

  @DeleteDateColumn({ type: 'timestamptz', nullable: true, select: false, comment: '삭제일' })
  deletedAt?: Date | null
}
