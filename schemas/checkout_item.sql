-- Table: public.checkout_item

-- DROP TABLE IF EXISTS public.checkout_item;

CREATE TABLE IF NOT EXISTS public.checkout_item
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    item_id integer NOT NULL DEFAULT nextval('checkout_item_item_id_seq'::regclass),
    checkout_id integer NOT NULL,
    menu_id integer NOT NULL,
    price numeric(10,2) NOT NULL,
    quantity integer NOT NULL,
    CONSTRAINT "PK_81eb9baa3f0ec941a00cb96ce05" PRIMARY KEY (item_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.checkout_item OWNER to postgres;

COMMENT ON COLUMN public.checkout_item.created_at IS '생성일';

COMMENT ON COLUMN public.checkout_item.updated_at IS '수정일';

COMMENT ON COLUMN public.checkout_item.deleted_at IS '삭제일';

COMMENT ON COLUMN public.checkout_item.item_id IS 'PK';

COMMENT ON COLUMN public.checkout_item.checkout_id IS 'FK';

COMMENT ON COLUMN public.checkout_item.menu_id IS 'FK';

COMMENT ON COLUMN public.checkout_item.price IS '금액';

COMMENT ON COLUMN public.checkout_item.quantity IS '수량';