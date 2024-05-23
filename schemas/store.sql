-- Table: public.store

-- DROP TABLE IF EXISTS public.store;

CREATE TABLE IF NOT EXISTS public.store
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    store_id integer NOT NULL DEFAULT nextval('store_store_id_seq'::regclass),
    user_id character varying COLLATE pg_catalog."default" NOT NULL,
    review_id integer NOT NULL,
    business_no character varying COLLATE pg_catalog."default" NOT NULL,
    store_name character varying COLLATE pg_catalog."default" NOT NULL,
    store_address character varying COLLATE pg_catalog."default" NOT NULL,
    store_phone character varying COLLATE pg_catalog."default" NOT NULL,
    store_email character varying COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default" NOT NULL,
    images text COLLATE pg_catalog."default" NOT NULL,
    bank_code store_bank_code_enum NOT NULL,
    bank_account character varying COLLATE pg_catalog."default" NOT NULL,
    bank_account_name character varying COLLATE pg_catalog."default" NOT NULL,
    delivery_time character varying COLLATE pg_catalog."default" NOT NULL,
    delivery_fee numeric(10,2) NOT NULL,
    minimum_price numeric(10,2) NOT NULL,
    status store_status_enum NOT NULL DEFAULT 'INIT'::store_status_enum,
    CONSTRAINT "PK_94d7b0f600366ceb5c960069687" PRIMARY KEY (store_id),
    CONSTRAINT "UQ_1bb8bf0dd65b3e8298ef79640b7" UNIQUE (user_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.store OWNER to postgres;

COMMENT ON COLUMN public.store.created_at IS '생성일';

COMMENT ON COLUMN public.store.updated_at IS '수정일';

COMMENT ON COLUMN public.store.deleted_at IS '삭제일';

COMMENT ON COLUMN public.store.store_id IS 'PK';

COMMENT ON COLUMN public.store.user_id IS 'FK. 유저 id';

COMMENT ON COLUMN public.store.review_id IS 'FK 리뷰id';

COMMENT ON COLUMN public.store.business_no IS '사업자 번호';

COMMENT ON COLUMN public.store.store_name IS '상점명';

COMMENT ON COLUMN public.store.store_address IS '상점 주소';

COMMENT ON COLUMN public.store.store_phone IS '상점 대표 폰번호';

COMMENT ON COLUMN public.store.store_email IS '상점 대표 이메일';

COMMENT ON COLUMN public.store.description IS '상점 상세 설명';

COMMENT ON COLUMN public.store.images IS '상점 이미지';

COMMENT ON COLUMN public.store.bank_code IS '은행 코드';

COMMENT ON COLUMN public.store.bank_account IS '은행 계좌번호';

COMMENT ON COLUMN public.store.bank_account_name IS '은행 계좌명';

COMMENT ON COLUMN public.store.delivery_time IS '평균 배달 시간';

COMMENT ON COLUMN public.store.delivery_fee IS '배달 수수료';

COMMENT ON COLUMN public.store.minimum_price IS '최소 주문 금액';

COMMENT ON COLUMN public.store.status IS '[INIT(신규매장 준비중) READY(오픈 준비중) SALE(판매중) CLOSE(판매종료)]';