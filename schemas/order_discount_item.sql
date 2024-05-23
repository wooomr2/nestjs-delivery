-- Table: public.order_discount_item

-- DROP TABLE IF EXISTS public.order_discount_item;

CREATE TABLE IF NOT EXISTS public.order_discount_item
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    discount_item_id integer NOT NULL DEFAULT nextval('order_discount_item_discount_item_id_seq'::regclass),
    order_id integer NOT NULL,
    discount_id integer NOT NULL,
    discount_amount numeric(10,2) NOT NULL,
    CONSTRAINT "PK_a34e7a7f5a281a6bfc6d528a7d4" PRIMARY KEY (discount_item_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.order_discount_item OWNER to postgres;

COMMENT ON COLUMN public.order_discount_item.created_at IS '생성일';

COMMENT ON COLUMN public.order_discount_item.updated_at IS '수정일';

COMMENT ON COLUMN public.order_discount_item.deleted_at IS '삭제일';

COMMENT ON COLUMN public.order_discount_item.discount_item_id IS 'PK';

COMMENT ON COLUMN public.order_discount_item.order_id IS 'FK';

COMMENT ON COLUMN public.order_discount_item.discount_id IS 'FK';

COMMENT ON COLUMN public.order_discount_item.discount_amount IS '최종 할인 금액';