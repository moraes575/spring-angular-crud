--
-- Name: empregado; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.empregado (
    id bigint NOT NULL,
    email character varying(255),
    nome character varying(255),
    sobrenome character varying(255)
);


--
-- Name: empregado_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.empregado ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.empregado_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: empregado empregado_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.empregado
    ADD CONSTRAINT empregado_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

