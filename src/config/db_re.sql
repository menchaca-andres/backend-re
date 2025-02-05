-- Name: db_re

-- Tabla: generos
create table generos (
	idgenero serial primary key,
	nombregenero varchar(10)
);

select * from generos;

-- Tabla: estudiantes
create table estudiantes (
	id_est serial primary key,
	ci_est varchar(20),
	nombre_est varchar(80),
	appat_est varchar(20),
	apmat_est varchar(20),
	fnac_est date,
	dir_est text,
	ncel_est varchar(20),
	coins_est text,
	cont_est varchar(20),
	idgenero int references generos(idgenero)
);

select * from estudiantes;