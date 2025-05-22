-- Active: 1728031472035@@127.0.0.1@3306@visiteur
CREATE TABLE Visiteur (
    numVisiteur INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(200) NOT NULL,
    nbrJours INT(10) NOT NULL,
    tarifJournalier INT(10) NOT NULL
);

