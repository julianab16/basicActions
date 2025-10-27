const { multiplyArray, countConsonants, medianArray } = require('../src/level1');

describe('s-juanse Level 1 – Basics (custom implementations)', () => {
  test('multiplyArray: multiplies values and validates input', () => {
    expect(multiplyArray([1, 2, 3])).toBe(6);
    expect(multiplyArray([5])).toBe(5);
    expect(multiplyArray([])).toBe(0);
    expect(() => multiplyArray('nope')).toThrow();
  });

  test('countConsonants: counts consonants only', () => {
    expect(countConsonants('Hello World')).toBe(7);
    expect(countConsonants('AEIOUaeiou')).toBe(0);
    expect(countConsonants('123, @#$')).toBe(0);
  });

  test('medianArray: returns median correctly', () => {
    expect(medianArray([3, 1, 2])).toBe(2);
    expect(medianArray([1, 2, 3, 4])).toBe(2.5);
    expect(medianArray([])).toBe(0);
  });
});
