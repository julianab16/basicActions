const { isPalindrome, sumArray, countVowels, findLargest } = require('../src/level1.js');

describe('Level 1 – Basics', () => {
  test('isPalindrome() should detect palindromes correctly', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
    expect(isPalindrome(12321)).toBe(false);
  });

  test('sumArray() should return correct sum', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([1, 'a', 2])).toBe(3);
    expect(() => sumArray('not an array')).toThrow();
  });

  test('countVowels() should count vowels correctly', () => {
    expect(countVowels('hello')).toBe(2);
    expect(countVowels('xyz')).toBe(0);
    expect(countVowels(123)).toBe(0);
  });

  test('findLargest() should return the largest number', () => {
    expect(findLargest([1, 5, 3])).toBe(5);
    expect(findLargest(['a', 10, 3])).toBe(10);
    expect(findLargest([])).toBeUndefined();
  });
});
