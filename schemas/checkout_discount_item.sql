-- Table: public.checkout_discount_item

-- DROP TABLE IF EXISTS public.checkout_discount_item;

CREATE TABLE IF NOT EXISTS public.checkout_discount_item
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    discount_item_id integer NOT NULL DEFAULT nextval('checkout_discount_item_discount_item_id_seq'::regclass),
    checkout_id integer NOT NULL,
    discount_id integer NOT NULL,
    discount_discount_id integer,
    CONSTRAINT "PK_f921d0a682e202e0c47835b0ac7" PRIMARY KEY (discount_item_id),
    CONSTRAINT "FK_52ed6be5ecb52061d9e5cfdb7a5" FOREIGN KEY (discount_discount_id)
        REFERENCES public.discount (discount_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.checkout_discount_item OWNER to postgres;

COMMENT ON COLUMN public.checkout_discount_item.created_at IS '생성일';

COMMENT ON COLUMN public.checkout_discount_item.updated_at IS '수정일';

COMMENT ON COLUMN public.checkout_discount_item.deleted_at IS '삭제일';

COMMENT ON COLUMN public.checkout_discount_item.discount_item_id IS 'PK';

COMMENT ON COLUMN public.checkout_discount_item.checkout_id IS 'FK';

COMMENT ON COLUMN public.checkout_discount_item.discount_id IS 'FK';

COMMENT ON COLUMN public.checkout_discount_item.discount_discount_id IS 'PK';