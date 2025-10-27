const { capitalizeWords, reverseString, countVowels } = require("../src/level1");

describe("Level 1 – Basic Functions", () => {
  // -----------------------------
  test("capitalizeWords: should capitalize each word", () => {
    expect(capitalizeWords("hola mundo")).toBe("Hola Mundo");
    expect(capitalizeWords("javascript es genial")).toBe("Javascript Es Genial");
    expect(capitalizeWords("HELLO WORLD")).toBe("Hello World");
    expect(capitalizeWords("  hola   chatgpt  ")).toBe("  Hola   Chatgpt  ");
    expect(() => capitalizeWords(123)).toThrow("Input must be a string");
  });

  // -----------------------------
  test("reverseString: should reverse a given string", () => {
    expect(reverseString("hola")).toBe("aloh");
    expect(reverseString("12345")).toBe("54321");
    expect(reverseString("Ana")).toBe("anA");
    expect(reverseString("")).toBe("");
    expect(() => reverseString(42)).toThrow("Input must be a string");
  });

  // -----------------------------
  test("countVowels: should count vowels in a string", () => {
    expect(countVowels("hola")).toBe(2);
    expect(countVowels("murciélago")).toBe(5);
    expect(countVowels("AEIOU")).toBe(5);
    expect(countVowels("xyz")).toBe(0);
    expect(() => countVowels(100)).toThrow("Input must be a string");
  });
});