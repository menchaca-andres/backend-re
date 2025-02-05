-- Name: db_re

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
);

select * from estudiantes;