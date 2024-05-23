-- Table: public.category_store_mapping

-- DROP TABLE IF EXISTS public.category_store_mapping;

CREATE TABLE IF NOT EXISTS public.category_store_mapping
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    id integer NOT NULL DEFAULT nextval('category_store_mapping_id_seq'::regclass),
    category_id integer NOT NULL,
    store_id integer NOT NULL,
    CONSTRAINT "PK_b83f1927cf9f3e0d5b9ae3434da" PRIMARY KEY (id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.category_store_mapping OWNER to postgres;

COMMENT ON COLUMN public.category_store_mapping.created_at IS '생성일';

COMMENT ON COLUMN public.category_store_mapping.updated_at IS '수정일';

COMMENT ON COLUMN public.category_store_mapping.deleted_at IS '삭제일';

COMMENT ON COLUMN public.category_store_mapping.id IS 'PK';

COMMENT ON COLUMN public.category_store_mapping.category_id IS 'FK';

COMMENT ON COLUMN public.category_store_mapping.store_id IS 'FK';