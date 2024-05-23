-- Table: public.checkout

-- DROP TABLE IF EXISTS public.checkout;

CREATE TABLE IF NOT EXISTS public.checkout
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    checkout_id integer NOT NULL DEFAULT nextval('checkout_checkout_id_seq'::regclass),
    store_id integer NOT NULL,
    customer_id integer NOT NULL,
    CONSTRAINT "PK_b558965fdc82a2b4a377110ea7d" PRIMARY KEY (checkout_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.checkout OWNER to postgres;

COMMENT ON COLUMN public.checkout.created_at IS '생성일';

COMMENT ON COLUMN public.checkout.updated_at IS '수정일';

COMMENT ON COLUMN public.checkout.deleted_at IS '삭제일';

COMMENT ON COLUMN public.checkout.checkout_id IS 'PK';

COMMENT ON COLUMN public.checkout.store_id IS 'FK';

COMMENT ON COLUMN public.checkout.customer_id IS 'FK';