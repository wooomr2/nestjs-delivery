export enum ROLE {
  CUSTOMER = 'CUSTOMER',
  RIDER = 'RIDER',
  STROE = 'STORE',
  ADMIN = 'ADMIN',
}

export enum USER_STATUS {
  ACTIVE = 'ACTIVE',
  DORMANT = 'DORMANT',
  WITHDRAWAL = 'WITHDRAWAL',
}

// TODO:: 각 user별 role은 구현할 때 추가할 것
export enum STORE_STATUS {
  INIT = 'INIT',
  READY = 'READY',
  SALE = 'SALE',
  CLOSE = 'CLOSE',
}

export enum WALLET_JOB_TYPE {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
}

export enum SETTLEMENT_STATUS {
  WAIT = 'WAIT',
  HOLD = 'HOLD',
  DONE = 'DONE',
}

export enum MENU_STATUS {
  READY = 'READY',
  SALE = 'SALE',
  SOLD_OUT = 'SOLD_OUT',
  HOLD = 'HOLD',
}

export enum DISCOUNT_TYPE {
  COUPON = 'COUPON',
  DELIVERY_PROMOTION = 'DELIVERY_PROMOTION',
  STORE_PROMOTION = 'STORE_PROMOTION',
}

export enum DISCOUNT_METHOD {
  FIXED_RATE = 'FIXED_RATE', // 정률
  FIXED_AMOUNT = 'FIXED_AMOUNT', // 정액
}

/** 주문 상태 */
export enum ORDER_STATUS {
  PROCESSING = 'PROCESSING', // 진행중
  CENCELLED = 'CENCELLED', // 접수거부, 취소
  COOKING = 'COOKING', // 조리중
  DELIVERING = 'DELIVERING', // 배달중
  COMPLETED = 'COMPLETED', // 배달완료
}

/** 결제 상태 */
export enum PAYMENT_STATUS {
  PAYMENT_COMPLETE = 'PAYMENT_COMPLETE',
  REFUND = 'REFUND',
}

/** 배달 상태 */
export enum DELIVERY_STATUS {
  READY = 'READY', // 배달 대기
  DELIVERY_ACCEPTED = 'DELIVERY_ACCEPTED', // 배차완료
  ARRIVAL_AT_STORE = 'ARRIVAL_AT_STORE', // 매장 도착
  PICKUP_COMPLETE = 'PICKUP_COMPLETE', // 픽업 완료
  DELIVERY_COMPLETE = 'DELIVERY_COMPLETE', // 배달 완료
}

export enum TRANSPORTATION {
  CAR = 'CAR',
  MORTORCYCLE = 'MORTORCYCLE',
  BICYCLE = 'BICYCLE',
  KICKBOARD = 'KICKBOARD',
}

export enum PAYMENT_METHOD {
  CARD = 'CARD',
  PHONE = 'PHONE',
}

export enum BANK_CODE {
  SHINHAN = 'SHINHAN',
  KB = 'KB',
}

export enum CONTRACT_TYPE {
  INDIVIDUAL = 'INDIVIDUAL', // 개인(기본형)
  FRANCHISE = 'FRANCHISE', // 가맹점형
}
