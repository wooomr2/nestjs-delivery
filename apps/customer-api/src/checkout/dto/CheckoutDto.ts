import { CheckoutItem } from '@libs/db/entities'

export class CheckoutDto {
  customerId: number
  checkoutId: number
  checkoutItems: CheckoutItem[]
  totalAmount: number
}
