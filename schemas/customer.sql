-- Table: public.customer

-- DROP TABLE IF EXISTS public.customer;

CREATE TABLE IF NOT EXISTS public.customer
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    customer_id integer NOT NULL DEFAULT nextval('customer_customer_id_seq'::regclass),
    user_id uuid NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    phone character varying COLLATE pg_catalog."default" NOT NULL,
    address character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_cde3d123fc6077bcd75eb051226" PRIMARY KEY (customer_id),
    CONSTRAINT "UQ_5d1f609371a285123294fddcf3a" UNIQUE (user_id),
    CONSTRAINT "FK_5d1f609371a285123294fddcf3a" FOREIGN KEY (user_id)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.customer OWNER to postgres;

COMMENT ON COLUMN public.customer.created_at IS '생성일';

COMMENT ON COLUMN public.customer.updated_at IS '수정일';

COMMENT ON COLUMN public.customer.deleted_at IS '삭제일';

COMMENT ON COLUMN public.customer.customer_id IS 'PK';

COMMENT ON COLUMN public.customer.user_id IS 'FK. 유저 id';

COMMENT ON COLUMN public.customer.name IS '이름';

COMMENT ON COLUMN public.customer.phone IS '핸드폰번호';

COMMENT ON COLUMN public.customer.address IS '주소';