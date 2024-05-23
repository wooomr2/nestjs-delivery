-- Table: public.user

-- DROP TABLE IF EXISTS public."user";

CREATE TABLE IF NOT EXISTS public."user"
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    email character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    roles user_roles_enum[] NOT NULL DEFAULT '{CUSTOMER}'::user_roles_enum[],
    status user_status_enum NOT NULL DEFAULT 'ACTIVE'::user_status_enum,
    refresh_token character varying COLLATE pg_catalog."default",
    CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id),
    CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."user" OWNER to postgres;

COMMENT ON COLUMN public."user".created_at IS '생성일';

COMMENT ON COLUMN public."user".updated_at IS '수정일';

COMMENT ON COLUMN public."user".deleted_at IS '삭제일';

COMMENT ON COLUMN public."user".id IS 'PK';

COMMENT ON COLUMN public."user".email IS '이메일';

COMMENT ON COLUMN public."user".password IS '비밀번호';

COMMENT ON COLUMN public."user".roles
    IS '권한: CUSTOMER, RIDER, STORE, ADMIN';

COMMENT ON COLUMN public."user".status
    IS '상태: ACTIVE(회원), DORMANT(휴면), WITHDRAWAL(탈퇴)';