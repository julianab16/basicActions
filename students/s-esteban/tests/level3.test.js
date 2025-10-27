const { calculator, factorial, hasDuplicates } = require("../src/level3.js");

describe("Level 3 – Algorithms and Metrics", () => {
  test("mini calculator works correctly", () => {
    expect(calculator(2, 3, "add")).toBe(5);
    expect(calculator(10, 2, "divide")).toBe(5);
    expect(calculator(5, 0, "divide")).toBeNull();
  });

  test("factorial works recursively", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
  });


  test("detects duplicates in an array", () => {
    expect(hasDuplicates([1, 2, 3, 1])).toBe(true);
    expect(hasDuplicates([1, 2, 3])).toBe(false);
  });
});