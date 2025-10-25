const { countWords, averageArray, reverseNumber } = require("../src/level1");

describe("Level 1 - countWords", () => {
  test("should count words in a normal sentence", () => {
    expect(countWords("Hola mundo desde Node")).toBe(4);
  });

  test("should ignore extra spaces and punctuation", () => {
    expect(countWords("  Hola,   mundo! ")).toBe(2);
  });

  test("should return 0 for empty string", () => {
    expect(countWords("   ")).toBe(0);
  });
});
//--------------------------------------------------------------------
describe("Level 1 - averageArray", () => {
  test("should calculate average of positive numbers", () => {
    expect(averageArray([2, 4, 6, 8])).toBe(5);
  });

  test("should calculate average with negative numbers", () => {
    expect(averageArray([-2, 2, 6])).toBeCloseTo(2);
  });

  test("should return 0 for empty array", () => {
    expect(averageArray([])).toBe(0);
  });
});
//--------------------------------------------------------------------
describe("Level 1 - reverseNumber", () => {
  test("should reverse digits of a positive number", () => {
    expect(reverseNumber(12345)).toBe(54321);
  });

  test("should reverse digits and preserve negative sign", () => {
    expect(reverseNumber(-987)).toBe(-789);
  });

  test("should handle numbers ending with zero", () => {
    expect(reverseNumber(1200)).toBe(21);
  });

  test("should throw error for non-numeric input", () => {
    expect(() => reverseNumber("abc")).toThrow("Input must be a valid number");
  });
});
