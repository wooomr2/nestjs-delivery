-- Table: public.order_item

-- DROP TABLE IF EXISTS public.order_item;

CREATE TABLE IF NOT EXISTS public.order_item
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    item_id integer NOT NULL DEFAULT nextval('order_item_item_id_seq'::regclass),
    order_id integer NOT NULL,
    menu_id integer NOT NULL,
    price numeric(10,2) NOT NULL,
    quantity integer NOT NULL,
    CONSTRAINT "PK_f9129a798f2308714d1e3be2463" PRIMARY KEY (item_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.order_item OWNER to postgres;

COMMENT ON COLUMN public.order_item.created_at IS '생성일';

COMMENT ON COLUMN public.order_item.updated_at IS '수정일';

COMMENT ON COLUMN public.order_item.deleted_at IS '삭제일';

COMMENT ON COLUMN public.order_item.item_id IS 'PK';

COMMENT ON COLUMN public.order_item.order_id IS 'FK';

COMMENT ON COLUMN public.order_item.menu_id IS 'FK';

COMMENT ON COLUMN public.order_item.price IS '주문 금액';

COMMENT ON COLUMN public.order_item.quantity IS '주문 수량';