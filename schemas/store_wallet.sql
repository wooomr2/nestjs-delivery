-- Table: public.store_wallet

-- DROP TABLE IF EXISTS public.store_wallet;

CREATE TABLE IF NOT EXISTS public.store_wallet
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    wallet_id integer NOT NULL DEFAULT nextval('store_wallet_wallet_id_seq'::regclass),
    store_id integer NOT NULL,
    deposit numeric(10,2) NOT NULL,
    CONSTRAINT "PK_b22fbf05cafa6785768565d8ee4" PRIMARY KEY (wallet_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.store_wallet OWNER to postgres;

COMMENT ON COLUMN public.store_wallet.created_at IS '생성일';

COMMENT ON COLUMN public.store_wallet.updated_at IS '수정일';

COMMENT ON COLUMN public.store_wallet.deleted_at IS '삭제일';

COMMENT ON COLUMN public.store_wallet.wallet_id IS 'PK';

COMMENT ON COLUMN public.store_wallet.store_id IS 'FK';

COMMENT ON COLUMN public.store_wallet.deposit IS '예금';