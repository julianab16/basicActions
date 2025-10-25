const { miniCalculator, passwordStrength, factorialRecursive } = require("../src/level3");

describe("Level 3 – Basic Functions", () => {
  // -----------------------------
  test("miniCalculator: should perform basic arithmetic operations", () => {
    expect(miniCalculator("+", 2, 3)).toBe(5);
    expect(miniCalculator("-", 5, 3)).toBe(2);
    expect(miniCalculator("*", 4, 3)).toBe(12);
    expect(miniCalculator("/", 10, 2)).toBe(5);
    expect(miniCalculator("%", 10, 3)).toBe(1);
    expect(miniCalculator("^", 2, 3)).toBe(8);
  });

  // -----------------------------
  test("passwordStrength: should generate password strength", () => {
    expect(passwordStrength("Password1!")).toEqual({
      suggestions: [],
    });
  });

  // -----------------------------
  test("factorialRecursive: should compute factorial recursively", () => {
    expect(factorialRecursive(0)).toBe(1n);
    expect(factorialRecursive(5)).toBe(120n);
    expect(factorialRecursive(10)).toBe(3628800n);
  });
});