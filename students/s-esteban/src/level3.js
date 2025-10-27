// LEVEL 3 – Algorithms and Metrics

// Mini calculator
function calculator(a, b, operation) {
  if (typeof a !== "number" || typeof b !== "number") throw new Error("Invalid numbers");
  switch (operation) {
    case "add": return a + b;
    case "subtract": return a - b;
    case "multiply": return a * b;
    case "divide": return b !== 0 ? a / b : null;
    default: throw new Error("Invalid operation");
  }
}

// recursive factorial
function factorial(n) {
  if (n < 0) throw new Error("Negative number not allowed");
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
  
// Detect duplicates in an array
function hasDuplicates(arr) {
  if (!Array.isArray(arr)) return false;
  return new Set(arr).size !== arr.length;
}

module.exports = { calculator, factorial, hasDuplicates };