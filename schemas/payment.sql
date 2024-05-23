-- Table: public.payment

-- DROP TABLE IF EXISTS public.payment;

CREATE TABLE IF NOT EXISTS public.payment
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    payment_id integer NOT NULL DEFAULT nextval('payment_payment_id_seq'::regclass),
    order_id integer NOT NULL,
    customer_id integer NOT NULL,
    store_id integer NOT NULL,
    pg_id integer NOT NULL,
    pg_payment_id character varying COLLATE pg_catalog."default" NOT NULL,
    payment_method character varying COLLATE pg_catalog."default" NOT NULL DEFAULT 'CARD'::character varying,
    pay_amount numeric(10,0) NOT NULL,
    status payment_status_enum NOT NULL,
    CONSTRAINT "PK_9fff60ac6ac1844ea4e0cfba67a" PRIMARY KEY (payment_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.payment OWNER to postgres;

COMMENT ON COLUMN public.payment.created_at IS '생성일';

COMMENT ON COLUMN public.payment.updated_at IS '수정일';

COMMENT ON COLUMN public.payment.deleted_at IS '삭제일';

COMMENT ON COLUMN public.payment.payment_id IS 'PK';

COMMENT ON COLUMN public.payment.order_id IS '주문서 ID';

COMMENT ON COLUMN public.payment.customer_id IS '결제 고객 ID';

COMMENT ON COLUMN public.payment.store_id IS '상점 ID';

COMMENT ON COLUMN public.payment.pg_id IS 'PG 업체 ID';

COMMENT ON COLUMN public.payment.pg_payment_id IS 'PG 업체의 결제 ID';

COMMENT ON COLUMN public.payment.payment_method IS '결제 수단';

COMMENT ON COLUMN public.payment.pay_amount IS '결제 금액';

COMMENT ON COLUMN public.payment.status IS '결제 상태';