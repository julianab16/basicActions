const { findMin, removeSpaces, celsiusToFahrenheit } = require("../src/level1");

describe("Level 1 – Basic Functions", () => {
  // -----------------------------
  test("findMin: should find the smallest number", () => {
    expect(findMin([5, 2, 9, 1, 7])).toBe(1);
    expect(findMin([10, -5, 3, 0])).toBe(-5);
    expect(findMin([100])).toBe(100);
    expect(() => findMin([])).toThrow("Array cannot be empty");
    expect(() => findMin("not an array")).toThrow("Input must be an array");
    expect(() => findMin([1, 2, "3"])).toThrow("All elements must be valid numbers");
  });

  // -----------------------------
  test("removeSpaces: should remove all spaces", () => {
    expect(removeSpaces("Hello World")).toBe("HelloWorld");
    expect(removeSpaces("  Java  Script  ")).toBe("JavaScript");
    expect(removeSpaces("NoSpacesHere")).toBe("NoSpacesHere");
    expect(removeSpaces("")).toBe("");
    expect(() => removeSpaces(123)).toThrow("Input must be a string");
  });

  // -----------------------------
  test("celsiusToFahrenheit: should convert temperature correctly", () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
    expect(celsiusToFahrenheit(100)).toBe(212);
    expect(celsiusToFahrenheit(-40)).toBe(-40);
    expect(celsiusToFahrenheit(37)).toBeCloseTo(98.6, 1);
    expect(() => celsiusToFahrenheit("hot")).toThrow("Input must be a valid number");
    expect(() => celsiusToFahrenheit(NaN)).toThrow("Input must be a valid number");
  });
});