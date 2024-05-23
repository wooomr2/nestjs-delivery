-- Table: public.cart

-- DROP TABLE IF EXISTS public.cart;

CREATE TABLE IF NOT EXISTS public.cart
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    cart_id integer NOT NULL DEFAULT nextval('cart_cart_id_seq'::regclass),
    customer_id integer NOT NULL,
    CONSTRAINT "PK_c741cd2adcfb2f2d1c2743d76b6" PRIMARY KEY (cart_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.cart OWNER to postgres;

COMMENT ON COLUMN public.cart.created_at IS '생성일';

COMMENT ON COLUMN public.cart.updated_at IS '수정일';

COMMENT ON COLUMN public.cart.deleted_at IS '삭제일';

COMMENT ON COLUMN public.cart.cart_id IS 'PK';

COMMENT ON COLUMN public.cart.customer_id IS 'FK';