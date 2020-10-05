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
