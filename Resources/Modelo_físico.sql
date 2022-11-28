-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema agenciadeviagensdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema agenciadeviagensdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `agenciadeviagensdb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `agenciadeviagensdb` ;

-- -----------------------------------------------------
-- Table `agenciadeviagensdb`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agenciadeviagensdb`.`cliente` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `cliente_cpf` VARCHAR(11) NULL DEFAULT NULL,
  `cliente_email` VARCHAR(50) NULL DEFAULT NULL,
  `cliente_nome` VARCHAR(20) NULL DEFAULT NULL,
  `cliente_rg` VARCHAR(11) NULL DEFAULT NULL,
  `cliente_senha` VARCHAR(11) NULL DEFAULT NULL,
  `cliente_telefone` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `UK_muhakwjmhi5qqdkx594b6mov9` (`cliente_cpf` ASC) VISIBLE,
  UNIQUE INDEX `UK_k5hp811b1p9hx26axuoyvry7b` (`cliente_rg` ASC) VISIBLE,
  UNIQUE INDEX `UK_lsweaevhc6e0n59hfbybkvel9` (`cliente_senha` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `agenciadeviagensdb`.`promocao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agenciadeviagensdb`.`promocao` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `promocao_datachegada` VARCHAR(8) NULL DEFAULT NULL,
  `promocao_datasaida` VARCHAR(8) NULL DEFAULT NULL,
  `promocao_destino` VARCHAR(20) NULL DEFAULT NULL,
  `promocao_nomehospedagem` VARCHAR(50) NULL DEFAULT NULL,
  `promocao_quantidade_hospedes` VARCHAR(255) NULL DEFAULT NULL,
  `promocao_tipo_voo` VARCHAR(20) NULL DEFAULT NULL,
  `promocao_valor` VARCHAR(255) NULL DEFAULT NULL,
  `cliente_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK1gf6ka4y50vbep6yieobm4kq5` (`cliente_id` ASC) VISIBLE,
  CONSTRAINT `FK1gf6ka4y50vbep6yieobm4kq5`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `agenciadeviagensdb`.`cliente` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
