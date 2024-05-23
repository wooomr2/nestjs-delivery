-- Table: public.rider_wallet_history

-- DROP TABLE IF EXISTS public.rider_wallet_history;

CREATE TABLE IF NOT EXISTS public.rider_wallet_history
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    id integer NOT NULL DEFAULT nextval('rider_wallet_history_id_seq'::regclass),
    wallet_id integer NOT NULL,
    rider_id integer NOT NULL,
    wallet_job_type rider_wallet_history_wallet_job_type_enum NOT NULL,
    money numeric(10,2) NOT NULL,
    balance numeric(10,2) NOT NULL,
    CONSTRAINT "PK_717259a48e476df6dc590c4074a" PRIMARY KEY (id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.rider_wallet_history OWNER to postgres;

COMMENT ON COLUMN public.rider_wallet_history.created_at IS '생성일';

COMMENT ON COLUMN public.rider_wallet_history.updated_at IS '수정일';

COMMENT ON COLUMN public.rider_wallet_history.deleted_at IS '삭제일';

COMMENT ON COLUMN public.rider_wallet_history.id IS 'PK';

COMMENT ON COLUMN public.rider_wallet_history.wallet_id IS 'FK';

COMMENT ON COLUMN public.rider_wallet_history.rider_id IS 'FK';

COMMENT ON COLUMN public.rider_wallet_history.wallet_job_type IS '이력 유형 - 입금, 출금';

COMMENT ON COLUMN public.rider_wallet_history.money IS '입출금 금액';

COMMENT ON COLUMN public.rider_wallet_history.balance IS '잔고';