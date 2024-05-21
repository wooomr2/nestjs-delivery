import { CartItem, MENU_STATUS, Menu } from '@libs/db/entities'

export const menuStub: Menu = {
  menuId: 1,
  storeId: 1,
  name: 'menu',
  price: 1000,
  images: ['image1', 'image2'],
  description: 'description',
  status: MENU_STATUS.HOLD,
  cartItem: new CartItem(),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
}

export const cartItemStub: CartItem = {
  cartItemId: 1,
  storeId: 1,
  menuId: 1,
  quantity: 1,
  cartId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
  menu: menuStub,
}
