const { addTwoNumbers, isNum, isEven  } = require("../src/level1");

describe("Level 1 – Basic Functions", () => {
  // -----------------------------
  test("addTwoNumbers: should add two numbers", () => {
    expect(addTwoNumbers(2, 3)).toBe(5);
    expect(addTwoNumbers(-1, 1)).toBe(0);
    expect(addTwoNumbers(0, 0)).toBe(0);
  });

  // -----------------------------
  test("isNum: should validate number type", () => {
    expect(isNum(1)).toBe(true);
    expect(isNum(3)).toBe(true);
    expect(isNum(88)).toBe(true);
    //expect(isNum('not a number')).toBe(false);
  });
  
  // -----------------------------
  test("isEven: should check if a number is even", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(0)).toBe(true);
  });
});
