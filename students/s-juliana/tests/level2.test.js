const { titleCase, fizzBuzz, isIsogram } = require("../src/level2");

describe("Level 2 – Basic Functions", () => {
  // -----------------------------
  test("titleCase: should convert text to title case", () => {
    expect(titleCase("hello world")).toBe("Hello World");
    expect(titleCase("foo bar")).toBe("Foo Bar");
    expect(titleCase("JAVA script")).toBe("Java Script");
  });

  // -----------------------------
  test("fizzBuzz: should generate FizzBuzz sequence", () => {
    expect(fizzBuzz(3)).toEqual([1, 2, "Fizz"]);
    expect(fizzBuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
    expect(fizzBuzz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
  });

  // -----------------------------
  test("isIsogram: should detect isogram words", () => {
    expect(isIsogram("isogram")).toBe(true);
    expect(isIsogram("lumberjack")).toBe(true);
    expect(isIsogram("hello")).toBe(false);
  });
});