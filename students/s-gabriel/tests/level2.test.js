const { reverseWords, factorial, removeDuplicates, countOccurrences } = require('../src/level2.js');

describe('Level 2 – Intermediate Logic', () => {
  test('reverseWords() should reverse each word but keep sentence order', () => {
    expect(reverseWords('hello world')).toBe('olleh dlrow');
    expect(reverseWords('abc')).toBe('cba');
    expect(reverseWords(123)).toBe('');
  });

  test('factorial() should calculate factorial correctly', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(() => factorial(-1)).toThrow();
  });

  test('removeDuplicates() should remove duplicates from array', () => {
    expect(removeDuplicates([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    expect(removeDuplicates(['a', 'b', 'a'])).toEqual(['a', 'b']);
    expect(() => removeDuplicates('abc')).toThrow();
  });

  test('countOccurrences() should count correctly', () => {
    expect(countOccurrences([1, 2, 2, 3, 2], 2)).toBe(3);
    expect(countOccurrences(['a', 'b', 'a'], 'a')).toBe(2);
    expect(countOccurrences([], 1)).toBe(0);
  });
});
