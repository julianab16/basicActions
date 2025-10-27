const { capitalizeSentences, charFrequency, isValidPhone } = require("../src/level2");

describe("Level 2 – Logic and Conditions", () => {
  // -----------------------------
  test("capitalizeSentences: should capitalize first letter of each sentence", () => {
    expect(capitalizeSentences("hello world. how are you? i am fine!")).toBe("Hello world. How are you? I am fine!");
    expect(capitalizeSentences("first sentence. second one!")).toBe("First sentence. Second one!");
    expect(capitalizeSentences("no punctuation")).toBe("No punctuation");
    expect(() => capitalizeSentences(123)).toThrow("Input must be a string");
  });

  // -----------------------------
  test("charFrequency: should count character occurrences", () => {
    expect(charFrequency("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    expect(charFrequency("Hello World!")).toEqual({ h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 });
    expect(charFrequency("aaa")).toEqual({ a: 3 });
    expect(charFrequency("123 abc")).toEqual({ a: 1, b: 1, c: 1 });
    expect(charFrequency("")).toEqual({});
    expect(() => charFrequency(null)).toThrow("Input must be a string");
  });

  // -----------------------------
  test("isValidPhone: should validate phone number format", () => {
    expect(isValidPhone("123-456-7890")).toBe(true);
    expect(isValidPhone("555-123-4567")).toBe(true);
    expect(isValidPhone("1234567890")).toBe(false);
    expect(isValidPhone("123-45-6789")).toBe(false);
    expect(isValidPhone("123-456-789")).toBe(false);
    expect(isValidPhone("abc-def-ghij")).toBe(false);
    expect(() => isValidPhone(1234567890)).toThrow("Input must be a string");
  });
});