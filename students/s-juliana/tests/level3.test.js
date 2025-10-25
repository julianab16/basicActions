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
    expect(() => miniCalculator("/", 5, 0)).toThrow("Division by zero");
    expect(() => miniCalculator("+", "a", 3)).toThrow("Both operands must be numbers");
    expect(miniCalculator("add", 7, 8)).toBe(15);
    expect(miniCalculator("sub", 10, 4)).toBe(6);
    expect(miniCalculator("mul", 3, 5)).toBe(15);
    expect(miniCalculator("div", 20, 4)).toBe(5);
    expect(miniCalculator("mod", 14, 5)).toBe(4);
    expect(miniCalculator("pow", 3, 3)).toBe(27);
  });

  // -----------------------------
  test("passwordStrength: should generate password strength", () => {
    expect(passwordStrength("Password1!")).toEqual({
      suggestions: [],
    });
    expect(passwordStrength("pass")).toEqual({
      suggestions: [
        "Use at least 8 characters",
        "Add uppercase letters",
        "Add digits",
        "Add special characters",
      ],
    });
    expect(passwordStrength("Password")).toEqual({
      suggestions: [
        "Add digits",
        "Add special characters",
      ],
    });
    expect(passwordStrength("Password1")).toEqual({
      suggestions: [
        "Add special characters",
      ],
    });
    expect(() => passwordStrength(12345)).toThrow("Input must be a string");
    expect(passwordStrength("12345678")).toEqual({
      suggestions: [
        "Add lowercase letters",
        "Add uppercase letters",
        "Add special characters",
      ],
    });
  });

  // -----------------------------
  test("factorialRecursive: should compute factorial recursively", () => {
    expect(factorialRecursive(0)).toBe(1n);
    expect(factorialRecursive(5)).toBe(120n);
    expect(factorialRecursive(10)).toBe(3628800n);
    expect(() => factorialRecursive(3.5)).toThrow("Input must be an integer");
    expect(() => factorialRecursive(-1)).toThrow("Input must be non-negative");
  });
});