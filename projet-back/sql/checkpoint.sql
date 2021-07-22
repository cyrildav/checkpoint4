DROP DATABASE IF EXISTS checkpoint;
CREATE DATABASE checkpoint;
USE checkpoint;

CREATE TABLE `user` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `question` VARCHAR(500) NOT NULL,
    PRIMARY KEY (`id`)
);
