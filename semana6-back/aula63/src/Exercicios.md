### Exercício 1

## a)

```
  export interface User {
  name: string;
  balance: number;
}
```

## b)

```
export function performPurchase(user: User, value: number): User | undefined {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value,
    };
  }
  return undefined;
}
```

### Exercício 2

```
import { performPurchase, User } from '../src';

```

## a)

```
test('Testing balance greater than value', () => {
  const user: User = {
    name: 'Astrodev',
    balance: 100,
  };

  const result = performPurchase(user, 50);

  expect(result).toEqual({
    ...user,
    balance: 50,
  });
});
```

## b)

```
test('Testing balance greater than value', () => {
  const user: User = {
    name: 'Astrodev',
    balance: 50,
  };

  const result = performPurchase(user, 50);

  expect(result).toEqual({
    ...user,
    balance: 0,
  });
});
```

## c)

```
test('Testing balance greater than value', () => {
  const user: User = {
    name: 'Astrodev',
    balance: 30,
  };

  const result = performPurchase(user, 50);

  expect(result).toEqual(undefined);
});
```

### Exercício 3

```
export enum LOCATION {
  EUA = 'EUA',
  BRAZIL = 'BRAZIL',
}

export enum NACIONALITY {
  BRAZILIAN = 'BRAZILIAN',
  AMERICAN = 'AMERICAN',
}

export interface User {
  name: string;
  age: number;
  nacionality: NACIONALITY;
}

export interface Casino {
  name: string;
  location: LOCATION;
}

export interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}

export interface ResultItem {
  allowed: string[];
  unallowed: string[];
}

export function verifyAge(casino: Casino, users: User[]): Result {
  const allowed: User[] = [];
  const unallowed: User[] = [];

  for (const user of users) {
    if (casino.location === LOCATION.EUA) {
      if (user.age >= 21) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    } else if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
      break;
    }
  }
  return {
    brazilians: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
    },
    americans: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
    },
  };
}
```

### Exercício 4

## a)

```
  test('1 brazilian allowed', () => {
    const brazilian: User = {
      name: 'Astrodev',
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: 'Balada Estelar',
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed).toEqual(['Astrodev']);
  });
```

## b)

```
test('1 american allowed', () => {
  const brazilian: User = {
    name: 'Astrodev',
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: 'Balada Estelar',
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [brazilian]);
  expect(result.americans.allowed).toEqual(['Astrodev']);
});
```

## c)

```
  test('No one allowed', () => {
    const brazilian: User = {
      name: 'Astrodev BR',
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: 'Astrodev EUA',
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: 'Balada Estelar',
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed).toEqual(['Astrodev BR', 'Astrodev BR']);
    expect(result.americans.unallowed).toEqual([
      'Astrodev EUA',
      'Astrodev EUA',
    ]);
  });
```

## d)

```
test("2 american allowed and 2 brazilians unallowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: "Astrodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
  });
```

### Exercício 5

## a)

```
import {
  Casino,
  LOCATION,
  NACIONALITY,
  User,
  verifyAge,
} from '../src/exercicio3';

test('1 brazilian allowed', () => {
  const brazilian: User = {
    name: 'Astrodev',
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const casino: Casino = {
    name: 'Balada Estelar',
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [brazilian]);
  expect(result.brazilians.allowed.length).toBeGreaterThan(0);
  expect(result.brazilians.allowed.length).toBeLessThan(2);
});
```

## b)

```
test('1 american allowed', () => {
  const brazilian: User = {
    name: 'Astrodev',
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: 'Balada Estelar',
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [brazilian]);
  expect(result.americans.unallowed.length).toBe(0);
});
```

## c)

```
test('No one allowed', () => {
  const brazilian: User = {
    name: 'Astrodev BR',
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const american: User = {
    name: 'Astrodev EUA',
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: 'Balada Estelar',
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [brazilian, brazilian, american, american]);

  expect(result.brazilians.unallowed).toContain('Astrodev BR');
  expect(result.americans.unallowed).toContain('Astrodev EUA');
});
```

## d)

```
test('2 american allowed and 2 brazilians unallowed', () => {
  const brazilian: User = {
    name: 'Astrodev BR',
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const american: User = {
    name: 'Astrodev EUA',
    age: 21,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: 'Balada Estelar',
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [brazilian, brazilian, american, american]);
  expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
  expect(result.americans.unallowed.length).toBeLessThan(1);
  expect(result.americans.allowed.length).toBe(2);
});
```

### Exercício 6

## a)

```
import { PostDatabase } from '../src/data/PostDatabase';
import * as dotenv from 'dotenv';

dotenv.config();

describe('Testando o UserDatabase', () => {
  const postDatabase = new PostDatabase();
  test('Create Post', async () => {
    const post = {
      id: '123',
      photo: 'https://picsum.photos/536/354',
      description: 'Conteúdo',
      createdAt: '2020-12-20',
      type: 'normal',
      userId: 'fc9af1f8-205e-469a-9d3b-c7045fbbf4ab',
    };

    await postDatabase.createPost(
      post.id,
      post.photo,
      post.description,
      post.createdAt,
      post.type,
      post.userId,
    );
    const postFromDb = await postDatabase.getPostById(post.id);

    expect(postFromDb).not.toBe(undefined);
    expect(postFromDb).toEqual({
      post_id: '123',
      post_photo: 'https://picsum.photos/536/354',
      post_description: 'Conteúdo',
      post_createdAt: '2020-12-20',
      post_type: 'normal',
      post_userId: 'fc9af1f8-205e-469a-9d3b-c7045fbbf4ab',
    });
  });
});
```

## b)

```
  afterAll(async () => {
    await postDatabase.deleteUser('123');
    await BaseDatabase.destroyConnection();
  });
```

### Exercício 7

## a)

```

```
