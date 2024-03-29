	
CREATE SEQUENCE categoria_id_categoria_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
COMMENT ON SEQUENCE categoria_id_categoria_seq IS 'DbWrench Autogenerated Sequence.';
	
CREATE SEQUENCE compras_id_compras_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
COMMENT ON SEQUENCE compras_id_compras_seq IS 'DbWrench Autogenerated Sequence.';	

CREATE SEQUENCE direccion_id_direccion_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
COMMENT ON SEQUENCE direccion_id_direccion_seq IS 'DbWrench Autogenerated Sequence.';

CREATE SEQUENCE productos_id_producto_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
COMMENT ON SEQUENCE productos_id_producto_seq IS 'DbWrench Autogenerated Sequence.';

CREATE SEQUENCE usuario_id_usuario_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
COMMENT ON SEQUENCE usuario_id_usuario_seq IS 'DbWrench Autogenerated Sequence.';

CREATE SEQUENCE vendedor_id_vendedor_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
COMMENT ON SEQUENCE vendedor_id_vendedor_seq IS 'DbWrench Autogenerated Sequence.';

-- categoria definition

-- Drop table

-- DROP TABLE categoria;

CREATE TABLE usuario (
	id_usuario serial4 NOT NULL,
	nombres varchar(100) NULL,
	apellido_paterno varchar(100) NULL,
	apellido_materno varchar(100) NULL,
	celular varchar(30) NULL,
	contrasena varchar(250) NULL,
	tipo varchar(50) NULL,
	rut varchar(50) NULL,
	correo varchar(200) NULL,
	CONSTRAINT pkusuario PRIMARY KEY (id_usuario)
);

CREATE TABLE direccion (
	id_direccion serial4 NOT NULL,
	region varchar(50) NULL,
	comuna varchar(50) NULL,
	calle varchar(50) NULL,
	numero int4 NULL,
	descripcion varchar(200) NULL,
	id_usuario int4 NULL,
	CONSTRAINT pkdireccion PRIMARY KEY (id_direccion)
);


CREATE TABLE categoria (
	id_categoria serial4 NOT NULL,
	nombre varchar(50) NULL,
	descripcion varchar(250) NULL,
	CONSTRAINT pkcategoria PRIMARY KEY (id_categoria)
);

-- productos definition

-- Drop table

-- DROP TABLE productos;

CREATE TABLE productos (
	id_producto serial4 NOT NULL,
	id_categoria int4 NULL,
	nombre varchar(100) NULL,
	descripcion varchar(200) NULL,
	imagen varchar(200) NULL,
	precio int4 NULL,
	stock int4 NULL,
	estado varchar(10) NULL,
	fecha_ingreso date NULL,
	CONSTRAINT pkproductos PRIMARY KEY (id_producto)
);


-- productos foreign keys

ALTER TABLE productos ADD CONSTRAINT fk_productos_categoria FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria);


-- vendedor definition

-- Drop table

-- DROP TABLE vendedor;

CREATE TABLE vendedor (
	id_vendedor serial4 NOT NULL,
	id_producto int4 NULL,
	rut varchar(20) NULL,
	nombre varchar(200) NULL,
	apellido_paterno varchar(200) NULL,
	apellido_materno varchar(200) NULL,
	telefono varchar(100) NULL,
	correo varchar(200) NULL,
	direccion varchar(200) NULL,
	fecha_ingreso date NULL,
	CONSTRAINT pkvendedor PRIMARY KEY (id_vendedor)
);


-- vendedor foreign keys

ALTER TABLE vendedor ADD CONSTRAINT fk_vendedor_productos FOREIGN KEY (id_producto) REFERENCES productos(id_producto);

-- compras definition

-- Drop table

-- DROP TABLE compras;

CREATE TABLE compras (
	id_compras serial4 NOT NULL,
	productos json NULL,
	fecha date NULL,
	direccion varchar(200) NULL,
	id_usuario int4 NULL,
	CONSTRAINT pkcompras PRIMARY KEY (id_compras)
);


-- compras foreign keys

ALTER TABLE compras ADD CONSTRAINT fk_compras_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario);

-- direccion definition

-- Drop table

-- DROP TABLE direccion;


-- direccion foreign keys

ALTER TABLE direccion ADD CONSTRAINT fk_direccion_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario);

-- usuario definition

-- Drop table

-- DROP TABLE usuario;
