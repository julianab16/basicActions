import { isPalindrome, sumArray, countVowels, findLargest } from "../src/level1.js";

describe("Level 1 – Basic Functions", () => {
  test("detects palindromes correctly", () => {
    expect(isPalindrome("Ana")).toBe(true);
    expect(isPalindrome("Carro")).toBe(false);
  });

  test("sums array numbers correctly", () => {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([10, -5, 2])).toBe(7);
  });

  test("counts vowels in text", () => {
    expect(countVowels("Hola mundo")).toBe(4);
    expect(countVowels("xyz")).toBe(0);
  });

  test("finds the largest number", () => {
    expect(findLargest([3, 10, 5])).toBe(10);
    expect(findLargest([])).toBeNull();
  });
});
