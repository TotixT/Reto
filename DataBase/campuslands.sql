CREATE DATABASE campusland;

USE campusland;

CREATE TABLE pais(
    idPais INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombrePais VARCHAR(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE departamento(
    idDep INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idPais INT NOT NULL,
    nombreDep VARCHAR(50) NOT NULL,
    FOREIGN KEY (idPais) REFERENCES pais(idPais)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE region(
    idReg INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idDep INT NOT NULL,
    nombreReg VARCHAR(60) NOT NULL,
    FOREIGN KEY (idDep) REFERENCES departamento(idDep)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE campers;
CREATE TABLE campers(
    idCamper INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idReg INT NOT NULL,
    nombreCamper VARCHAR(50) NOT NULL,
    apellidoCamper VARCHAR(50) NOT NULL,
    fechaNac DATE NOT NULL,
    FOREIGN KEY (idReg) REFERENCES region(idReg)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;