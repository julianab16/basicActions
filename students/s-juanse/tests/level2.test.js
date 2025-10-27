const { kebabToSnake, secondLargest, validatePhoneSimple } = require('../src/level2');

describe('s-juanse Level 2 – Logic and conditions', () => {
  test('kebabToSnake: converts hyphens to underscores', () => {
    expect(kebabToSnake('my-func-name')).toBe('my_func_name');
    expect(kebabToSnake('nochange')).toBe('nochange');
    expect(() => kebabToSnake(123)).toThrow();
  });

  test('secondLargest: returns second distinct largest number', () => {
    expect(secondLargest([1, 3, 3, 2])).toBe(2);
    expect(secondLargest([5])).toBeNull();
    expect(secondLargest([10, 9, 8])).toBe(9);
  });

  test('validatePhoneSimple: basic digit-length validation', () => {
    expect(validatePhoneSimple('+1 (555) 123-4567')).toBe(true);
    expect(validatePhoneSimple('1234')).toBe(false);
  });
});
