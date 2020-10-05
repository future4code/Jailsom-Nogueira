## Exercício 1

```
export interface Character {
  name: string;
  life: number;
  strength: number;
  defense: number;
}
export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
		input.life === undefined ||
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false;
  }

  if (input.life <=0 || input.strength <=0 || input.defense <=0) {
    return false;
  }

  return true;
};
```

## Exercício 2

```
import { validateCharacter } from '../src/exercicio1';

describe('Testing validateCharacter', () => {
  test('Should return false for empty name', () => {
    const result = validateCharacter({
      name: '',
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
  test('Should return false for empty life', () => {
    const result = validateCharacter({
      name: 'Jay',
      life: 0,
      strength: 300,
      defense: 500,
    });
    expect(result).toBe(false);
  });
  test('Should return false for empty strength', () => {
    const result = validateCharacter({
      name: 'Jay',
      life: 1500,
      strength: 0,
      defense: 500,
    });
    expect(result).toBe(false);
  });
  test('Should return false for empty defense', () => {
    const result = validateCharacter({
      name: 'Jay',
      life: 1500,
      strength: 300,
      defense: 0,
    });
    expect(result).toBe(false);
  });
  test('Should return false for empty life or strength or defense', () => {
    const result = validateCharacter({
      name: 'Jay',
      life: 1500,
      strength: 300,
      defense: -1,
    });
    expect(result).toBe(false);
  });
  test('Should return false for life 0', () => {
    const result = validateCharacter({
      name: 'Scorpion',
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
  test('Should return true for all valid inputs', () => {
    const result = validateCharacter({
      name: 'Scorpion',
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });
});

```

## Exercício 3

```
import { Character, validateCharacter } from './exercicio1';

export const performAttack = (attacker: Character, defender: Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error('Invalid character');
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};
export const invertedDerformAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean,
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error('Invalid character');
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};

```

## Exercício 4

```
test('Creating Mocks', () => {
  const validatorMock = jest.fn(() => {
    return true;
  });
});
test('Creating Mocks', () => {
  const validatorMock = jest.fn(() => {
    return false;
  });
});

```

## Exercício 5

```
import { Character } from '../src/exercicio1';
import { invertedDerformAttack } from '../src/exercicio3';

describe('Testing function', () => {
  test('Should perform attack', () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: 'Scorpion',
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: 'Kitana',
      life: 1500,
      defense: 400,
      strength: 800,
    };

    invertedDerformAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test('Should return invalid character error', () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: 'Scorpion',
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: 'Kitana',
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      invertedDerformAttack(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe('Invalid character');
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
});

```

## Exercício 6

```
import { Character } from '../src/exercicio1';
import { invertedDerformAttack } from '../src/exercicio3';

describe('Testing function', () => {
  test('Should perform a kill', () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: 'Scorpion',
      life: 1500,
      defense: 200,
      strength: 1900,
    };

    const defender: Character = {
      name: 'Kitana',
      life: 1500,
      defense: 400,
      strength: 800,
    };

    invertedDerformAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(0);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test('Should perform 2 attacks', () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: 'Scorpion',
      life: 1500,
      defense: 200,
      strength: 500,
    };

    const defender: Character = {
      name: 'Kitana',
      life: 1500,
      defense: 400,
      strength: 800,
    };

    invertedDerformAttack(attacker, defender, validatorMock as any);
    invertedDerformAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(4);
    expect(validatorMock).toHaveReturnedTimes(4);
  });

  test('Should perform a kill in 2 attacks', () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: 'Scorpion',
      life: 1500,
      defense: 200,
      strength: 500,
    };

    const defender: Character = {
      name: 'Kitana',
      life: 200,
      defense: 400,
      strength: 800,
    };

    invertedDerformAttack(attacker, defender, validatorMock as any);
    invertedDerformAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(0);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(4);
    expect(validatorMock).toHaveReturnedTimes(4);
  });
});

```
