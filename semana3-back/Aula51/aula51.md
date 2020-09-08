### Exercício 1
a) 
```
CREATE TABLE
```
cria a tabela
```
VARCHAR(255)
```
string com até 255 caracteres
```
FLOAT
```
números não inteiros
```
NOT NULL
```
parâmetro não nulo
```
DATE
```
tipo data
```
VARCHAR(6)
```
string com até 6 caracteres.

b)me mostrou apenas a tabela "Actor" que eu havia criado:
```
SHOW TABLES 
```
me retornou duas databases:
```
SHOW DATABASES 
```

c)Retorna toda a estrutura da tabela.
```
DESCRIBE Actor 
```
Retorna erro:
```
SHOW Actor 
```

### Exercício 2

a)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
b) Código do erro: 1062, entrada duplicada "002" para chave "primária". Já existia uma primary key com este valor 
e chaves primárias não devem ser duplicadas. 
c) O número de colunas definido na função é diferente do número declarado nos campos
d) O campo "name" não possui valor padrão, logo precisa ser passado na declaração e no respectivo campo/coluna.
Também não pode ser "null"
e) O campo data estava como números separados por traços, é esperada uma string.

### Exercício 3
```
SELECT * from Actor;
```
a) 
```
SELECT * from Actor WHERE gender = "female";
```
b) 
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```
c) 
```
SELECT * from Actor WHERE gender = "invalid";
```
Retornou uma tabela vazia, pq não achou nada?
d) 
```
SELECT id, name, salary from Actor WHERE salary > 500000;
```
e) O campo "nome" deveria ser "name", já que está declarado assim em Actor.

### Exercício 4 
a) Busca primeiramente todos os nomes começados com A ou J e depois, dentre estes quais tem salário acima de R$300,00
b) 
```
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
```
c)
```
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";
```
d) 
```
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND (salary between 350000 AND 900000);
```

### Exercício 5
```
SET SQL_SAFE_UPDATES = 0;
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
	rating INT NOT NULL
);
DESCRIBE Movies;
INSERT INTO Movies (id, title, synopsis, release_Date, rating)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
INSERT INTO Movies (id, title, synopsis, release_Date, rating)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
  empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
  "2012-12-27", 
  10
);
INSERT INTO Movies (id, title, synopsis, release_Date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. 
  A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
INSERT INTO Movies (id, title, synopsis, release_Date, rating)
VALUES(
  "004",
  "Meu Nome Não É Johnny",
  "João Guilherme Estrella é um jovem da classe média que se torna o rei do tráfico de drogas da zona sul do Rio de Janeiro. O rapaz inteligente e 
  adorado pelos pais passa a ser investigado pela polícia e enfrenta a dura realidade de um criminoso.",
  "2008-01-04", 
  8
);
SELECT * FROM Movies;
```

### Exercício 6
a)
```
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "001";
```
b)
```
SELECT * FROM Actor WHERE name LIKE "Juliana Paes";
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```
c)
```
SELECT * FROM Actor WHERE id = "005";
UPDATE Actor
SET 
	name = "Jay",
	birth_date = "1984-05-16",
    salary = 200000,
    gender = "male"
WHERE id = "005";
```
d) Nada foi afetado. Aparentemente não é retornado um erro quando a posição não existe.

### Exercício 7
a)
```
SELECT * FROM Actor;
DELETE FROM Actor WHERE name = "Jay";
```
b)
```
DELETE FROM Actor 
	WHERE 
		gender = "male" AND 
        salary > 1000000;
```

### Exercício 8
a) Retorna todos os tipos de gênero na table "Actor".
```
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```
b)
```
SELECT id, name from Actor ORDER BY name DESC;
```
c)
```
SELECT * from Actor ORDER BY salary;
```
d)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
e)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```