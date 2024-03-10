
create database web_laboratorya;

\c web_laboratorya;

create extension pgcrypto;

create table admins(
    admin_id serial primary key,
    admin_name varchar(30) not null,
    password varchar(60) not null,
 created_at timestamp default current_timestamp,
    updated_at timestamp,
    deleted_at timestamp,
    ip varchar not null

);

insert into admins(admin_name,password,ip) values ('asad',crypt('1234',gen_salt('bf')),'192.168.31.210');





create table yangilik(
    yangilik_id serial primary key,
    yangilik_title varchar(60) not null,
     yangilik_body varchar not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp,
    deleted_at timestamp
   
);

insert into yangilik(yangilik_title,yangilik_body)values 
('yangilik_nomi','yangilik_bodyyangilik_bodyyangilik_bodyyangilik_bodyyangilik_body');

insert into yangilik(yangilik_title,yangilik_body)values 
('yangilik_nomi','yangilik_bodyyangilik_bodyyangilik_bodyyangilik_bodyyangilik_bodyyangilik_body');



create table maqola(
    maqola_id serial primary key,
    maqola_title varchar(60) not null,
    maqola_body varchar not null,
       created_at timestamp default current_timestamp,
    updated_at timestamp,
    deleted_at timestamp
   

);


insert into maqola(maqola_title,maqola_body)values 
('maqola_nomi','maqola_bodymaqola_bodymaqola_bodymaqola_bodymaqola_body');

insert into maqola(maqola_title,maqola_body)values 
('maqola_nomi','maqola_bodymaqola_bodymaqola_bodymaqola_bodymaqola_bodymaqola_body');


create table ariza(
    ariza_id serial primary key,
    familyangiz varchar(60) not null,
    isminggiz varchar not null,
    telefon_raqam varchar not null,
    ariza_maqsadi varchar not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp,
    deleted_at timestamp
   

);

insert into ariza(familyangiz,isminggiz,telefon_raqam,ariza_maqsadi)values 
('jumayev','suxrob','946922939','web sayt ariza');












