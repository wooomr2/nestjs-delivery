-- Table: public.rider_settlement

-- DROP TABLE IF EXISTS public.rider_settlement;

CREATE TABLE IF NOT EXISTS public.rider_settlement
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    settlement_id integer NOT NULL DEFAULT nextval('rider_settlement_settlement_id_seq'::regclass),
    rider_id integer NOT NULL,
    order_id integer NOT NULL,
    ordered_delivery_id integer NOT NULL,
    delivery_fee numeric(10,2) NOT NULL,
    delivery_promotion_fee numeric(10,2) NOT NULL,
    settlement_amount numeric(10,2) NOT NULL,
    settlement_status rider_settlement_settlement_status_enum NOT NULL DEFAULT 'WAIT'::rider_settlement_settlement_status_enum,
    CONSTRAINT "PK_3e8e47ba2c871bca679227e835a" PRIMARY KEY (settlement_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.rider_settlement OWNER to postgres;

COMMENT ON COLUMN public.rider_settlement.created_at IS '생성일';

COMMENT ON COLUMN public.rider_settlement.updated_at IS '수정일';

COMMENT ON COLUMN public.rider_settlement.deleted_at IS '삭제일';

COMMENT ON COLUMN public.rider_settlement.settlement_id IS 'PK';

COMMENT ON COLUMN public.rider_settlement.rider_id IS 'FK';

COMMENT ON COLUMN public.rider_settlement.order_id IS 'FK';

COMMENT ON COLUMN public.rider_settlement.ordered_delivery_id IS 'FK. 주문에 대한 배달 id';

COMMENT ON COLUMN public.rider_settlement.delivery_fee IS '라이더 배달료 수익';

COMMENT ON COLUMN public.rider_settlement.delivery_promotion_fee IS '라이더 배달 미션 프로모션 금액';

COMMENT ON COLUMN public.rider_settlement.settlement_amount IS '정산 금액';

COMMENT ON COLUMN public.rider_settlement.settlement_status IS '정산의 상태 (대기, 보류, 완료)';