-- Table: public.rider_wallet

-- DROP TABLE IF EXISTS public.rider_wallet;

CREATE TABLE IF NOT EXISTS public.rider_wallet
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    wallet_id integer NOT NULL DEFAULT nextval('rider_wallet_wallet_id_seq'::regclass),
    rider_id integer NOT NULL,
    deposit numeric(10,2) NOT NULL,
    CONSTRAINT "PK_89e5e9abb1bafb402a018f28c8e" PRIMARY KEY (wallet_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.rider_wallet OWNER to postgres;

COMMENT ON COLUMN public.rider_wallet.created_at IS '생성일';

COMMENT ON COLUMN public.rider_wallet.updated_at IS '수정일';

COMMENT ON COLUMN public.rider_wallet.deleted_at IS '삭제일';

COMMENT ON COLUMN public.rider_wallet.wallet_id IS 'PK';

COMMENT ON COLUMN public.rider_wallet.rider_id IS 'FK';

COMMENT ON COLUMN public.rider_wallet.deposit IS '예금';