const { analyzePrime, arrayMetrics, fibonacciSequence } = require("../src/level3");

describe("Level 3 – Algorithms and Metrics", () => {
  // -----------------------------
  test("analyzePrime: should analyze if number is prime and find factors", () => {
    expect(analyzePrime(7)).toEqual({
      isPrime: true,
      factors: [1, 7],
      divisorCount: 2
    });
    expect(analyzePrime(12)).toEqual({
      isPrime: false,
      factors: [1, 2, 3, 4, 6, 12],
      divisorCount: 6
    });
    expect(analyzePrime(1)).toEqual({
      isPrime: false,
      factors: [1],
      divisorCount: 1
    });
    expect(analyzePrime(2)).toEqual({
      isPrime: true,
      factors: [1, 2],
      divisorCount: 2
    });
    expect(analyzePrime(100)).toEqual({
      isPrime: false,
      factors: [1, 2, 4, 5, 10, 20, 25, 50, 100],
      divisorCount: 9
    });
    expect(() => analyzePrime(3.5)).toThrow("Input must be an integer");
    expect(() => analyzePrime(-5)).toThrow("Input must be a positive integer");
    expect(() => analyzePrime("7")).toThrow("Input must be an integer");
  });

  // -----------------------------
  test("arrayMetrics: should calculate mode, range, and frequency", () => {
    expect(arrayMetrics([1, 2, 2, 3, 4])).toEqual({
      mode: 2,
      range: 3,
      frequency: 2
    });
    expect(arrayMetrics([5, 5, 5, 10, 15])).toEqual({
      mode: 5,
      range: 10,
      frequency: 3
    });
    expect(arrayMetrics([1, 1, 2, 2, 3, 3])).toEqual({
      mode: 1,
      range: 2,
      frequency: 2
    });
    expect(arrayMetrics([10])).toEqual({
      mode: 10,
      range: 0,
      frequency: 1
    });
    expect(() => arrayMetrics([])).toThrow("Input must be a non-empty array");
    expect(() => arrayMetrics("not array")).toThrow("Input must be a non-empty array");
    expect(() => arrayMetrics([1, 2, "3"])).toThrow("All elements must be valid numbers");
  });

  // -----------------------------
  test("fibonacciSequence: should generate Fibonacci sequence", () => {
    expect(fibonacciSequence(0)).toEqual([]);
    expect(fibonacciSequence(1)).toEqual([0]);
    expect(fibonacciSequence(2)).toEqual([0, 1]);
    expect(fibonacciSequence(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fibonacciSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect(fibonacciSequence(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
    expect(() => fibonacciSequence(-1)).toThrow("Input must be non-negative");
    expect(() => fibonacciSequence(3.5)).toThrow("Input must be an integer");
    expect(() => fibonacciSequence("5")).toThrow("Input must be an integer");
  });
});