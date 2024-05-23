-- Table: public.cart_item

-- DROP TABLE IF EXISTS public.cart_item;

CREATE TABLE IF NOT EXISTS public.cart_item
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    cart_item_id integer NOT NULL DEFAULT nextval('cart_item_cart_item_id_seq'::regclass),
    cart_id integer NOT NULL,
    store_id integer NOT NULL,
    menu_id integer NOT NULL,
    quantity integer NOT NULL,
    CONSTRAINT "PK_a96f2f9a014485fe47477c26c4a" PRIMARY KEY (cart_item_id),
    CONSTRAINT "UQ_5da62f4a29970ca0f551f3a744e" UNIQUE (menu_id),
    CONSTRAINT "FK_5da62f4a29970ca0f551f3a744e" FOREIGN KEY (menu_id)
        REFERENCES public.menu (menu_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.cart_item OWNER to postgres;

COMMENT ON COLUMN public.cart_item.created_at IS '생성일';

COMMENT ON COLUMN public.cart_item.updated_at IS '수정일';

COMMENT ON COLUMN public.cart_item.deleted_at IS '삭제일';

COMMENT ON COLUMN public.cart_item.cart_item_id IS 'PK';

COMMENT ON COLUMN public.cart_item.cart_id IS 'FK';

COMMENT ON COLUMN public.cart_item.store_id IS 'FK';

COMMENT ON COLUMN public.cart_item.menu_id IS 'FK';

COMMENT ON COLUMN public.cart_item.quantity IS '수량';