-- Table: public.rider_settlement_history

-- DROP TABLE IF EXISTS public.rider_settlement_history;

CREATE TABLE IF NOT EXISTS public.rider_settlement_history
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    id integer NOT NULL DEFAULT nextval('rider_settlement_history_id_seq'::regclass),
    settlement_id integer NOT NULL,
    rider_id integer NOT NULL,
    order_id integer NOT NULL,
    ordered_delivery_id integer NOT NULL,
    delivery_fee numeric(10,2) NOT NULL,
    delivery_promotion_fee numeric(10,2) NOT NULL,
    settlement_amount numeric(10,2) NOT NULL,
    settlement_status rider_settlement_history_settlement_status_enum NOT NULL,
    CONSTRAINT "PK_dd5141b3ec0f917a961cf0e581e" PRIMARY KEY (id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.rider_settlement_history OWNER to postgres;

COMMENT ON COLUMN public.rider_settlement_history.created_at IS '생성일';

COMMENT ON COLUMN public.rider_settlement_history.updated_at IS '수정일';

COMMENT ON COLUMN public.rider_settlement_history.deleted_at IS '삭제일';

COMMENT ON COLUMN public.rider_settlement_history.id IS 'PK';

COMMENT ON COLUMN public.rider_settlement_history.settlement_id IS 'FK';

COMMENT ON COLUMN public.rider_settlement_history.rider_id IS 'FK';

COMMENT ON COLUMN public.rider_settlement_history.order_id IS 'FK';

COMMENT ON COLUMN public.rider_settlement_history.ordered_delivery_id IS 'FK. 주문에 대한 배달 id';

COMMENT ON COLUMN public.rider_settlement_history.delivery_fee IS '배달료 수익';

COMMENT ON COLUMN public.rider_settlement_history.delivery_promotion_fee IS '배달 미션 프로모션 금액';

COMMENT ON COLUMN public.rider_settlement_history.settlement_amount IS '정산 금액';

COMMENT ON COLUMN public.rider_settlement_history.settlement_status IS '정산의 상태 (대기, 보류, 완료)';