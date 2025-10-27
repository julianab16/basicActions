const { sumOfDigits, findMaxMin, wordFrequency } = require("../src/level3");

describe("Level 3 – Algorithms and Metrics", () => {
  // -----------------------------
  test("sumOfDigits: should return the sum of digits in a number", () => {
    expect(sumOfDigits(1234)).toBe(10);
    expect(sumOfDigits(0)).toBe(0);
    expect(sumOfDigits(-987)).toBe(24);
    expect(sumOfDigits(10001)).toBe(2);
    expect(() => sumOfDigits("123")).toThrow("Input must be a number");
  });

  // -----------------------------
  test("findMaxMin: should return max and min from an array", () => {
    expect(findMaxMin([1, 2, 3, 4, 5])).toEqual({ max: 5, min: 1 });
    expect(findMaxMin([-10, 0, 10])).toEqual({ max: 10, min: -10 });
    expect(findMaxMin([7])).toEqual({ max: 7, min: 7 });
    expect(() => findMaxMin("1234")).toThrow("Input must be a non-empty array of numbers");
    expect(() => findMaxMin([])).toThrow("Input must be a non-empty array of numbers");
  });

  // -----------------------------
  test("wordFrequency: should count occurrences of each word", () => {
    expect(wordFrequency("Hola hola mundo")).toEqual({ hola: 2, mundo: 1 });
    expect(wordFrequency("El sol brilla el sol calienta")).toEqual({
      el: 2,
      sol: 2,
      brilla: 1,
      calienta: 1,
    });
    expect(wordFrequency("")).toEqual({});
    expect(() => wordFrequency(123)).toThrow("Input must be a string");
  });
});