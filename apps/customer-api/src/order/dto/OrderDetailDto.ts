import { OrderDiscountItem, OrderItem } from '@libs/db/entities'

export class OrderDetailDto {
  orderId: number
  customerId: number
  storeId: number
  orderDiscountItem?: OrderDiscountItem
  orderItem: OrderItem[]
}
