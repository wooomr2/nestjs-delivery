import { cartItemStub } from '../test/stub'

export const CartService = jest.fn().mockReturnValue({
  upsert: jest.fn().mockResolvedValue(cartItemStub),
  findByCustomerId: jest.fn().mockResolvedValue(false),
  remove: jest.fn().mockResolvedValue(false),
})
