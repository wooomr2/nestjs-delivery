-- Table: public.menu

-- DROP TABLE IF EXISTS public.menu;

CREATE TABLE IF NOT EXISTS public.menu
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    menu_id integer NOT NULL DEFAULT nextval('menu_menu_id_seq'::regclass),
    store_id integer NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    price numeric(10,2) NOT NULL,
    images text COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default" NOT NULL,
    status menu_status_enum NOT NULL,
    CONSTRAINT "PK_237a0fe43278378e9c5729d17af" PRIMARY KEY (menu_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.menu OWNER to postgres;

COMMENT ON COLUMN public.menu.created_at IS '생성일';

COMMENT ON COLUMN public.menu.updated_at IS '수정일';

COMMENT ON COLUMN public.menu.deleted_at IS '삭제일';

COMMENT ON COLUMN public.menu.menu_id IS 'PK';

COMMENT ON COLUMN public.menu.store_id IS 'FK 상점 아이디';

COMMENT ON COLUMN public.menu.name IS '상품명';

COMMENT ON COLUMN public.menu.price IS '가격';

COMMENT ON COLUMN public.menu.images IS '상품 이미지';

COMMENT ON COLUMN public.menu.description IS '상품 설명';

COMMENT ON COLUMN public.menu.status IS '상품 상태';