import {
  Casino,
  LOCATION,
  NACIONALITY,
  User,
  verifyAge,
} from '../src/exercicio3';

//a)
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
//b)
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
//c)
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
//d)
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
