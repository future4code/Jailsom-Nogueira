import { performPurchase, User } from '../src/exercicio1';

describe('Testing balance', () => {
  //a)
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
  //b)
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
  //c)
  test('Testing balance greater than value', () => {
    const user: User = {
      name: 'Astrodev',
      balance: 30,
    };

    const result = performPurchase(user, 50);

    expect(result).toEqual(undefined);
  });
});
