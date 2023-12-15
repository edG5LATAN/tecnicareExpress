create table telefonos(
  id int(10) not null auto_increment,
  marca varchar(50) not null,
  modelo varchar(50) not null,
  imagen varchar(500) not null,
  precio varchar(10) not null,
  especificaciones varchar(200) not null,
  primary key(id)
);

create table usuario(
  id int(10) not null auto_increment,
  usuario varchar(50) not null,
  clave varchar(200) not null,
  primary key(id)
);

insert into usuario (usuario,clave) values('Tecnicare','AdminTecnicare504');