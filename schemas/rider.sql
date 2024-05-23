-- Table: public.rider

-- DROP TABLE IF EXISTS public.rider;

CREATE TABLE IF NOT EXISTS public.rider
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    rider_id integer NOT NULL DEFAULT nextval('rider_rider_id_seq'::regclass),
    user_id character varying COLLATE pg_catalog."default" NOT NULL,
    phone character varying COLLATE pg_catalog."default" NOT NULL,
    transportation rider_transportation_enum NOT NULL,
    delivery_zone character varying COLLATE pg_catalog."default" NOT NULL,
    bank_account character varying COLLATE pg_catalog."default" NOT NULL,
    bank_account_name character varying COLLATE pg_catalog."default" NOT NULL,
    bank_code rider_bank_code_enum NOT NULL,
    CONSTRAINT "PK_a14584b1df696762eb113647a14" PRIMARY KEY (rider_id),
    CONSTRAINT "UQ_ce14b804e3eecc7b25a2bc769ef" UNIQUE (user_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.rider OWNER to postgres;

COMMENT ON COLUMN public.rider.created_at IS '생성일';

COMMENT ON COLUMN public.rider.updated_at IS '수정일';

COMMENT ON COLUMN public.rider.deleted_at IS '삭제일';

COMMENT ON COLUMN public.rider.rider_id IS 'PK';

COMMENT ON COLUMN public.rider.user_id IS 'FK. 유저 id';

COMMENT ON COLUMN public.rider.phone IS '핸드폰번호';

COMMENT ON COLUMN public.rider.transportation IS '배달수단';

COMMENT ON COLUMN public.rider.delivery_zone IS '배달지, 배달구역';

COMMENT ON COLUMN public.rider.bank_account IS '은행계좌';

COMMENT ON COLUMN public.rider.bank_account_name IS '은행명';

COMMENT ON COLUMN public.rider.bank_code IS '은행 코드';