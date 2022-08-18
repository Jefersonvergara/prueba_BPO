CREATE DATABASE bpo;

CREATE TABLE user(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);



INSERT INTO  user (name,email) VALUES ('admin','user@gmail.com'),('juan','juan@gmail.com');

-- public.departamento definition

-- Drop table

-- DROP TABLE public.departamento;

CREATE TABLE public.departamento (
	codigo int4 NOT NULL,
	nombre varchar NOT NULL,
	presupuesto float8 NOT NULL,
	CONSTRAINT departamento_pk PRIMARY KEY (codigo)
);

-- public.empleado definition

-- Drop table

-- DROP TABLE public.empleado;

CREATE TABLE public.empleado (
	codigo int4 NOT NULL,
	nif varchar NOT NULL,
	nombre varchar NOT NULL,
	apellido1 varchar NOT NULL,
	apellido2 varchar NULL,
	codigo_departamento int4 NOT NULL,
	CONSTRAINT empleado_pk PRIMARY KEY (codigo)
);


-- public.empleado foreign keys

ALTER TABLE public.empleado ADD CONSTRAINT empleado_fk FOREIGN KEY (codigo_departamento) REFERENCES public.departamento(codigo) ON DELETE CASCADE ON UPDATE CASCADE;