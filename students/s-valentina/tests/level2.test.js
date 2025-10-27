const { filterEvenNumbers, getLongestWord, removeDuplicates } = require("../src/level2");

describe("Level 2 – Logic and Conditions", () => {
  // -----------------------------
  test("filterEvenNumbers: should return only even numbers", () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(filterEvenNumbers([1, 3, 5])).toEqual([]);
    expect(filterEvenNumbers([2, 4, 6])).toEqual([2, 4, 6]);
    expect(() => filterEvenNumbers("not an array")).toThrow("Input must be an array");
  });

  // -----------------------------
  test("getLongestWord: should return the longest word", () => {
    expect(getLongestWord("Hola mundo desde JavaScript")).toBe("JavaScript");
    expect(getLongestWord("Un día soleado")).toBe("soleado");
    expect(getLongestWord(" ")).toBe("");
    expect(() => getLongestWord(123)).toThrow("Input must be a string");
  });

  // -----------------------------
  test("removeDuplicates: should remove repeated elements", () => {
    expect(removeDuplicates([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(removeDuplicates(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
    expect(removeDuplicates([])).toEqual([]);
    expect(() => removeDuplicates("abc")).toThrow("Input must be an array");
  });
});