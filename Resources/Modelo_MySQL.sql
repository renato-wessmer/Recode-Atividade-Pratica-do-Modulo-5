create database if not exists Douto;
use Douto;

CREATE TABLE aluno (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50),
    sobrenome varchar(50),
    nascimento date,
    serie enum('quinta','sexta'),
    estado enum('AC','AL','AM','AP','BA','CE','DF','ES','GO','MA','MG','MS','MT','PA','PB','PE','PI','PR','RJ','RN','RO','RR','RS','SC','SE','SP','TO'),
    cidade varchar(100),
    email varchar(100),
    senha varchar(8),
    fk_adm_id int not null
);

CREATE TABLE atividade (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    atvUmQuinta boolean,
    atvDoisQuinta boolean,
    atvTresQuinta boolean,
    atvQuatroQuinta boolean,
    atvCincoQuinta boolean,
    atvSeisQuinta boolean,
    atvUmSexta boolean,
    atvDoisSexta boolean,
    atvTresSexta boolean,
    atvQuatroSexta boolean,
    atvCincoSexta boolean,
    atvSeisSexta boolean,
    fk_adm_id int not null
);

CREATE TABLE adm (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50),
    sobrenome varchar(50),
    email varchar(100),
    senha varchar(8)
);

CREATE TABLE faz_recebe (
    fk_aluno_id INT NOT NULL,
    fk_atividade_id INT NOT NULL
);
 
ALTER TABLE aluno ADD CONSTRAINT FK_aluno_2
    FOREIGN KEY (fk_adm_id)
    REFERENCES adm (id)
    ON DELETE RESTRICT;
 
ALTER TABLE atividade ADD CONSTRAINT FK_atividade_2
    FOREIGN KEY (fk_adm_id)
    REFERENCES adm (id)
    ON DELETE RESTRICT;
 
ALTER TABLE faz_recebe ADD CONSTRAINT FK_faz_recebe_1
    FOREIGN KEY (fk_aluno_id)
    REFERENCES aluno (id)
    ON DELETE RESTRICT;
 
ALTER TABLE faz_recebe ADD CONSTRAINT FK_faz_recebe_2
    FOREIGN KEY (fk_atividade_id)
    REFERENCES atividade (id)
    ON DELETE RESTRICT;