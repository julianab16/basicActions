const { findDuplicates, getStatistics, compressString } = require("../src/level3");

describe("Level 3 - findDuplicates", () => {
  test("should find duplicates in an array", () => {
    expect(findDuplicates([1, 2, 3, 2, 1, 4])).toEqual([1, 2]);
  });

  test("should return empty array if no duplicates", () => {
    expect(findDuplicates([1, 2, 3, 4])).toEqual([]);
  });

  test("should throw error for non-array input", () => {
    expect(() => findDuplicates("not array")).toThrow("Input must be an array");
  });
});

// ----------------------------------------------------------------------

describe("Level 3 - getStatistics", () => {
  test("should calculate min, max, avg, and median", () => {
    const stats = getStatistics([2, 4, 6, 8, 10]);
    expect(stats).toEqual({ min: 2, max: 10, average: 6, median: 6 });
  });

  test("should handle even-length arrays", () => {
    const stats = getStatistics([1, 2, 3, 4]);
    expect(stats.median).toBe(2.5);
  });

  test("should throw error for empty array", () => {
    expect(() => getStatistics([])).toThrow("Input must be a non-empty array");
  });
});

// ----------------------------------------------------------------------

describe('compressString', () => {
  test('debe comprimir caracteres repetidos', () => {
    expect(compressString('aaabbc')).toBe('a3b2c1');
  });

  test('debe manejar cadenas sin repeticiones', () => {
    expect(compressString('abcd')).toBe('a1b1c1d1');
  });

  test('debe manejar cadenas con un solo caracter', () => {
    expect(compressString('a')).toBe('a1');
  });
});