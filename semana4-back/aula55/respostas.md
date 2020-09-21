### Exercício 1

a) Acredito que usando strings abrimos um leque de possibilidades como Maisculas/minusculas, caracteres especiais e até números em forma de string claro.

b)

```
import { v4 } from "uuid";

export class IdGenerator {
  public generate(): string {
    return v4();
  }
}
```

### Exercício 2

a)Não entendi a primeira função, logo não consigo explicá-la.
O que compreendi é que insere id, email, password, de um usuário no banco.

b)

```
SET SQL_SAFE_UPDATES = 0;
SELECT * from User;
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```
