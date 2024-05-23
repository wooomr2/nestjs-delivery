-- Table: public.store_settlement

-- DROP TABLE IF EXISTS public.store_settlement;

CREATE TABLE IF NOT EXISTS public.store_settlement
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    settlement_id integer NOT NULL DEFAULT nextval('store_settlement_settlement_id_seq'::regclass),
    store_id integer NOT NULL,
    order_id integer NOT NULL,
    payment_id integer NOT NULL,
    order_amount numeric(10,2) NOT NULL,
    discount_amount numeric(10,2) NOT NULL,
    delivery_fee numeric(10,2) NOT NULL,
    payment_amount numeric(10,2) NOT NULL,
    service_fee numeric(10,2) NOT NULL,
    promotion_fee numeric(10,2) NOT NULL,
    payment_fee numeric(10,2) NOT NULL,
    settlement_amount numeric(10,2) NOT NULL,
    settlement_status store_settlement_settlement_status_enum NOT NULL DEFAULT 'WAIT'::store_settlement_settlement_status_enum,
    CONSTRAINT "PK_07f351fad9dbcfe377979423ced" PRIMARY KEY (settlement_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.store_settlement OWNER to postgres;

COMMENT ON COLUMN public.store_settlement.created_at IS '생성일';

COMMENT ON COLUMN public.store_settlement.updated_at IS '수정일';

COMMENT ON COLUMN public.store_settlement.deleted_at IS '삭제일';

COMMENT ON COLUMN public.store_settlement.settlement_id IS 'PK';

COMMENT ON COLUMN public.store_settlement.store_id IS 'FK';

COMMENT ON COLUMN public.store_settlement.order_id IS 'FK';

COMMENT ON COLUMN public.store_settlement.payment_id IS 'FK';

COMMENT ON COLUMN public.store_settlement.order_amount IS '주문 금액';

COMMENT ON COLUMN public.store_settlement.discount_amount IS '할인 금액';

COMMENT ON COLUMN public.store_settlement.delivery_fee IS '결제시 고객이 지불한 총 배달비';

COMMENT ON COLUMN public.store_settlement.payment_amount IS '총 결제금액';

COMMENT ON COLUMN public.store_settlement.service_fee IS '서비스 중개 수수료';

COMMENT ON COLUMN public.store_settlement.promotion_fee IS '프로모션 수수료';

COMMENT ON COLUMN public.store_settlement.payment_fee IS '결제 정산 수수료';

COMMENT ON COLUMN public.store_settlement.settlement_amount IS '정산 금액';

COMMENT ON COLUMN public.store_settlement.settlement_status IS '정산의 상태 (대기, 보류, 완료)';