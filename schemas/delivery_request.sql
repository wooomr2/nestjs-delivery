-- Table: public.delivery_request

-- DROP TABLE IF EXISTS public.delivery_request;

CREATE TABLE IF NOT EXISTS public.delivery_request
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    delivery_request_id integer NOT NULL DEFAULT nextval('delivery_request_delivery_request_id_seq'::regclass),
    order_id integer NOT NULL,
    store_id integer NOT NULL,
    customer_id integer NOT NULL,
    store_address character varying COLLATE pg_catalog."default" NOT NULL,
    delivery_address character varying COLLATE pg_catalog."default" NOT NULL,
    cooking_minute integer NOT NULL,
    pickup_minute integer NOT NULL,
    status delivery_request_status_enum NOT NULL DEFAULT 'READY'::delivery_request_status_enum,
    delivery_fee integer NOT NULL,
    CONSTRAINT "PK_220baf87c08239d49b80b1a24c5" PRIMARY KEY (delivery_request_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.delivery_request OWNER to postgres;

COMMENT ON COLUMN public.delivery_request.created_at IS '생성일';

COMMENT ON COLUMN public.delivery_request.updated_at IS '수정일';

COMMENT ON COLUMN public.delivery_request.deleted_at IS '삭제일';

COMMENT ON COLUMN public.delivery_request.delivery_request_id IS 'PK';

COMMENT ON COLUMN public.delivery_request.order_id IS 'FK';

COMMENT ON COLUMN public.delivery_request.store_id IS 'FK';

COMMENT ON COLUMN public.delivery_request.customer_id IS 'FK';

COMMENT ON COLUMN public.delivery_request.store_address IS '매장 주소';

COMMENT ON COLUMN public.delivery_request.delivery_address IS '고객 배달지 주소';

COMMENT ON COLUMN public.delivery_request.cooking_minute IS '예상 조리 시간(분)';

COMMENT ON COLUMN public.delivery_request.pickup_minute IS '픽업 요청 시간(분)';

COMMENT ON COLUMN public.delivery_request.status IS '주문 배달 상태';

COMMENT ON COLUMN public.delivery_request.delivery_fee IS '배달 수수료';