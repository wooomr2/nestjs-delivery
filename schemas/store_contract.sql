-- Table: public.store_contract

-- DROP TABLE IF EXISTS public.store_contract;

CREATE TABLE IF NOT EXISTS public.store_contract
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    contract_id integer NOT NULL DEFAULT nextval('store_contract_contract_id_seq'::regclass),
    store_id integer NOT NULL,
    start_date timestamp without time zone NOT NULL,
    end_date timestamp without time zone NOT NULL,
    contract_type store_contract_contract_type_enum NOT NULL,
    fee_rate numeric(10,2) NOT NULL,
    CONSTRAINT "PK_f3f2fd855788dd062f409c7a523" PRIMARY KEY (contract_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.store_contract OWNER to postgres;

COMMENT ON COLUMN public.store_contract.created_at IS '생성일';

COMMENT ON COLUMN public.store_contract.updated_at IS '수정일';

COMMENT ON COLUMN public.store_contract.deleted_at IS '삭제일';

COMMENT ON COLUMN public.store_contract.contract_id IS 'PK';

COMMENT ON COLUMN public.store_contract.store_id IS '상점 ID';

COMMENT ON COLUMN public.store_contract.start_date IS '계약 시작일';

COMMENT ON COLUMN public.store_contract.end_date IS '계약 종료일';

COMMENT ON COLUMN public.store_contract.contract_type IS '계약 유형';

COMMENT ON COLUMN public.store_contract.fee_rate IS '수수료율';