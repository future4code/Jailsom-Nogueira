### Exec 1

a) Usada para criar uma relação entre tabelas.
b)

```
SELECT * FROM Rating;
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movies_id VARCHAR(255),
    FOREIGN KEY (movies_id) REFERENCES Movies(id)
);
INSERT INTO Rating (id, comment, rate, movies_id)
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);
```

c)A chave estrangeira falhou. Não é possivel adicionar uma posição que não está lá.

d)

```
ALTER TABLE Movies DROP COLUMN rating;
```

e)Coluna desconhecida

### Exec 2

a) Cria uma tabela chamada "MovieCast" com duas colunas, "movie_id" e "actor_id".
Também relaciona o ID da tabela Movies e o ID da tebla Actor a estas tebelas mencionadas acima.
b)

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
)
```

c)A chave estrangeira falhou. Não é possivel adicionar uma posição que não está lá.
d)Não pode deletar ou alterar

### Exec 3

a) Parece ter misturado as tabelas
b)

```
SELECT m.id movies_id, r.rate rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movies_id;
```

### Exec 4

a)

```
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
```

b)

```
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```

c)

```
SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```

### Exec 5

a)Uma junção primeiro em seguida a outra
b)

```
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
