-- Table: public.store_settlement_history

-- DROP TABLE IF EXISTS public.store_settlement_history;

CREATE TABLE IF NOT EXISTS public.store_settlement_history
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    id integer NOT NULL DEFAULT nextval('store_settlement_history_id_seq'::regclass),
    settlement_id integer NOT NULL,
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
    settlement_status store_settlement_history_settlement_status_enum NOT NULL DEFAULT 'WAIT'::store_settlement_history_settlement_status_enum,
    CONSTRAINT "PK_9e115104ae211abdb422cfb2014" PRIMARY KEY (id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.store_settlement_history OWNER to postgres;

COMMENT ON COLUMN public.store_settlement_history.created_at IS '생성일';

COMMENT ON COLUMN public.store_settlement_history.updated_at IS '수정일';

COMMENT ON COLUMN public.store_settlement_history.deleted_at IS '삭제일';

COMMENT ON COLUMN public.store_settlement_history.id IS 'PK';

COMMENT ON COLUMN public.store_settlement_history.settlement_id IS 'FK';

COMMENT ON COLUMN public.store_settlement_history.store_id IS 'FK';

COMMENT ON COLUMN public.store_settlement_history.order_id IS 'FK';

COMMENT ON COLUMN public.store_settlement_history.payment_id IS 'FK';

COMMENT ON COLUMN public.store_settlement_history.order_amount IS '주문 금액';

COMMENT ON COLUMN public.store_settlement_history.discount_amount IS '할인 금액';

COMMENT ON COLUMN public.store_settlement_history.delivery_fee IS '결제시 고객이 지불한 총 배달비';

COMMENT ON COLUMN public.store_settlement_history.payment_amount IS '총 결제금액';

COMMENT ON COLUMN public.store_settlement_history.service_fee IS '서비스 수수료';

COMMENT ON COLUMN public.store_settlement_history.promotion_fee IS '프로모션 수수료';

COMMENT ON COLUMN public.store_settlement_history.payment_fee IS '결제 정산 수수료';

COMMENT ON COLUMN public.store_settlement_history.settlement_amount IS '정산 금액';

COMMENT ON COLUMN public.store_settlement_history.settlement_status IS '정산의 상태 (대기, 보류, 완료)';