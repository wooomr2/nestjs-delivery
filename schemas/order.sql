-- Table: public.order

-- DROP TABLE IF EXISTS public."order";

CREATE TABLE IF NOT EXISTS public."order"
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    order_id integer NOT NULL DEFAULT nextval('order_order_id_seq'::regclass),
    order_uuid uuid NOT NULL,
    checkout_id integer NOT NULL,
    store_id integer NOT NULL,
    customer_id integer NOT NULL,
    order_amount numeric(10,2) NOT NULL,
    delivery_fee numeric(10,2) NOT NULL,
    discount_amount numeric(10,2) NOT NULL,
    total_amount numeric(10,2) NOT NULL,
    status order_status_enum NOT NULL DEFAULT 'PROCESSING'::order_status_enum,
    CONSTRAINT "PK_58998c5eaeaacdd004dec8b5d86" PRIMARY KEY (order_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."order" OWNER to postgres;

COMMENT ON COLUMN public."order".created_at IS '생성일';

COMMENT ON COLUMN public."order".updated_at IS '수정일';

COMMENT ON COLUMN public."order".deleted_at IS '삭제일';

COMMENT ON COLUMN public."order".order_id IS 'PK';

COMMENT ON COLUMN public."order".order_uuid IS '주문 UUID';

COMMENT ON COLUMN public."order".checkout_id IS 'FK';

COMMENT ON COLUMN public."order".store_id IS 'FK';

COMMENT ON COLUMN public."order".customer_id IS 'FK';

COMMENT ON COLUMN public."order".order_amount IS '주문 금액';

COMMENT ON COLUMN public."order".delivery_fee IS '배달비';

COMMENT ON COLUMN public."order".discount_amount IS '할인 금액';

COMMENT ON COLUMN public."order".total_amount IS '최종 총 주문 금액';