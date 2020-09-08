SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
	gender VARCHAR(6) NOT NULL
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Jailsom Nogueira",
   200000,
  "1984-05-16", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Mais Um Ator",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
SELECT * from Actor;
SELECT * from Actor WHERE gender = "female";
SELECT salary from Actor WHERE name = "Tony Ramos";
SELECT * from Actor WHERE gender = "invalid";
SELECT id, name, salary from Actor WHERE salary > 500000;
SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND (salary between 350000 AND 900000);


SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor