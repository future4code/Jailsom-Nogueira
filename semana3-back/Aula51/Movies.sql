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