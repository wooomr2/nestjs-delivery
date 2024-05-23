-- Table: public.category

-- DROP TABLE IF EXISTS public.category;

CREATE TABLE IF NOT EXISTS public.category
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    category_id integer NOT NULL DEFAULT nextval('category_category_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    main_image character varying COLLATE pg_catalog."default" NOT NULL,
    rank integer NOT NULL,
    CONSTRAINT "PK_cc7f32b7ab33c70b9e715afae84" PRIMARY KEY (category_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.category OWNER to postgres;

COMMENT ON COLUMN public.category.created_at IS '생성일';

COMMENT ON COLUMN public.category.updated_at IS '수정일';

COMMENT ON COLUMN public.category.deleted_at IS '삭제일';

COMMENT ON COLUMN public.category.category_id IS 'PK';

COMMENT ON COLUMN public.category.name IS '카테고리 이름';

COMMENT ON COLUMN public.category.main_image IS '카테고리 메인 이미지';

COMMENT ON COLUMN public.category.rank IS '카테고리 순서';