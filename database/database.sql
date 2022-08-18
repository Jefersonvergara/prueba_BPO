CREATE DATABASE bpo;

CREATE TABLE user(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO  user (name,email) VALUES ('admin','user@gmail.com'),('juan','juan@gmail.com');


CREATE TABLE public.departamento (
	codigo integer NOT NULL,
	nombre varchar NOT NULL,
	presupuesto double precision NOT NULL,
	CONSTRAINT departamento_pk PRIMARY KEY (codigo)
);