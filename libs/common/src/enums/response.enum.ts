export enum ResCode {
  OK = 'OK',

  NOT_FOUND_ITEM = 'NOT_FOUND_ITEM',

  EMAIL_EXISTS = 'EMAIL_EXISTS',

  INVALID_USER = 'INVALID_USER',
  DORMANT_USER = 'DORMANT_USER',

  INVALID_PASSWORD = 'INVALID_PASSWORD',
  ACCESS_DENIED = 'ACCESS_DENIED',

  PRODUCT_IN_USE = 'PRODUCT_IN_USE',
  OUT_OF_STOCK = 'OUT_OF_STOCK',

  REVIEW_EXISTS = 'REVIEW_EXISTS',

  INVALID_ORDER_STATUS = 'INVALID_ORDER_STATUS',
}

export enum ResMessage {
  OK = '성공.',

  NOT_FOUND_ITEM = '을 찾을 수 없습니다.',

  EMAIL_EXISTS = '이미 존재하는 이메일입니다.',

  INVALID_USER = '유저 정보가 유효하지 않습니다.',
  DORMANT_USER = '휴면 상태인 유저입니다.',

  INVALID_PASSWORD = '패스워드가 유효하지 않습니다.',
  ACCESS_DENIED = '접근이 거부되었습니다.',

  PRODUCT_IN_USE = '이미 사용중인 상품입니다.',
  OUT_OF_STOCK = '재고가 부족합니다.',

  REVIEW_EXISTS = '이미 존재하는 리뷰 입니다',

  INVALID_ORDER_STATUS = '잘몬된 주문 상태입니다.',
}
