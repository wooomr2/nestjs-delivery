import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class DeliveryRequestRiderMapping extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK' })
  id: number

  @Column({ comment: 'FK' })
  deliveryRequestId: number

  @Column({ comment: 'FK' })
  riderId: number
}
