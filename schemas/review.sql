-- Table: public.review

-- DROP TABLE IF EXISTS public.review;

CREATE TABLE IF NOT EXISTS public.review
(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    review_id integer NOT NULL DEFAULT nextval('review_review_id_seq'::regclass),
    customer_id character varying COLLATE pg_catalog."default" NOT NULL,
    store_id integer NOT NULL,
    rating integer NOT NULL,
    comment character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_0106a233019ba9f4ee80aca2958" PRIMARY KEY (review_id)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.review OWNER to postgres;

COMMENT ON COLUMN public.review.created_at IS '생성일';

COMMENT ON COLUMN public.review.updated_at IS '수정일';

COMMENT ON COLUMN public.review.deleted_at IS '삭제일';

COMMENT ON COLUMN public.review.review_id IS 'PK';

COMMENT ON COLUMN public.review.customer_id IS 'FK';

COMMENT ON COLUMN public.review.store_id IS 'FK';

COMMENT ON COLUMN public.review.rating IS '별점';

COMMENT ON COLUMN public.review.comment IS '댓글';