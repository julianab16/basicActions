const { isPrime, fibonacci, capitalizeWords, flattenArray } = require('../src/level3.js');

describe('Level 3 – Advanced Logic', () => {
  test('isPrime() should correctly detect prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(1)).toBe(false);
    expect(isPrime('a')).toBe(false);
  });

  test('fibonacci() should return the first n Fibonacci numbers', () => {
    expect(fibonacci(1)).toEqual([0]);
    expect(fibonacci(2)).toEqual([0, 1]);
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    expect(() => fibonacci(-1)).toThrow();
  });

  test('capitalizeWords() should capitalize each word correctly', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('javaScript is fun')).toBe('Javascript Is Fun');
    expect(capitalizeWords(123)).toBe('');
  });

  test('flattenArray() should flatten nested arrays recursively', () => {
    expect(flattenArray([1, [2, 3], [4, [5]]])).toEqual([1, 2, 3, 4, 5]);
    expect(flattenArray([[['a']], ['b', ['c']]])).toEqual(['a', 'b', 'c']);
    expect(() => flattenArray('abc')).toThrow();
  });
});
