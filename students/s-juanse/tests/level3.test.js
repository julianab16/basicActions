const { isPrime, binarySearch, sumOfDigits } = require('../src/level3');

describe('s-juanse Level 3 – Algorithms and metrics', () => {
  test('isPrime: basic prime checks', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(1)).toBe(false);
  });

  test('binarySearch: finds index or -1', () => {
    expect(binarySearch([1, 3, 5, 7], 5)).toBe(2);
    expect(binarySearch([], 1)).toBe(-1);
    expect(binarySearch([2,4,6], 3)).toBe(-1);
  });

  test('sumOfDigits: sums absolute digits of integer part', () => {
    expect(sumOfDigits(123)).toBe(6);
    expect(sumOfDigits(-405)).toBe(9);
  });
});
