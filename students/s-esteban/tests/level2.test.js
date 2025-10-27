const { toTitleCase, fizzBuzz, isIsogram} = require("../src/level2.js");

describe("Level 2 – Intermediate Logic", () => {
  test("converts text to title case", () => {
    expect(toTitleCase("hola mundo cruel")).toBe("Hola Mundo Cruel");
    expect(toTitleCase("JAVASCRIPT es genial")).toBe("Javascript Es Genial");
  });

  test("generates correct FizzBuzz sequence", () => {
    expect(fizzBuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
  });

  test("detects isograms", () => {
    expect(isIsogram("murciélago")).toBe(true);
    expect(isIsogram("casa")).toBe(false);
  });
});
