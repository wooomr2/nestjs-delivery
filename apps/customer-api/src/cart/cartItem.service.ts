import { Injectable } from '@nestjs/common'

@Injectable()
export class CartItemService {
  create(createCartDto: CreateCartDto) {
    return 'This action adds a new cart'
  }

  #addMenuToCart() {}

  findByCustomerId() {
    return `This action returns all cart`
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`
  }

  remove(id: number) {
    return `This action removes a #${id} cart`
  }
}
