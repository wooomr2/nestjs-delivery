-- Table: public.discount

-- DROP TABLE IF EXISTS public.discount;

CREATE TABLE IF NOT EXISTS public.discount
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    discount_id integer NOT NULL DEFAULT nextval('discount_discount_id_seq'::regclass),
    type discount_type_enum NOT NULL,
    method discount_method_enum NOT NULL,
    value smallint NOT NULL,
    start_date timestamp with time zone NOT NULL,
    expire_date timestamp with time zone NOT NULL,
    is_available boolean NOT NULL,
    CONSTRAINT "PK_8cabf52f6aceabf176dc2c837e5" PRIMARY KEY (discount_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.discount OWNER to postgres;

COMMENT ON COLUMN public.discount.created_at IS '생성일';

COMMENT ON COLUMN public.discount.updated_at IS '수정일';

COMMENT ON COLUMN public.discount.deleted_at IS '삭제일';

COMMENT ON COLUMN public.discount.discount_id IS 'PK';

COMMENT ON COLUMN public.discount.type IS '할인유형';

COMMENT ON COLUMN public.discount.method IS '[FIXED_RATE(정률), FIXED_AMOUND(정액)]';

COMMENT ON COLUMN public.discount.value IS '할인 가격/율';

COMMENT ON COLUMN public.discount.start_date IS '할인 시작일';

COMMENT ON COLUMN public.discount.expire_date IS '할인 만료일';

COMMENT ON COLUMN public.discount.is_available IS '활성화 여부';