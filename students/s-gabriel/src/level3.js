// LEVEL 3 – Advanced Logic

// 1. isPrime: check if a number is prime
function isPrime(num) {
  if (typeof num !== "number" || num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 2. fibonacci: return first n numbers in Fibonacci sequence
function fibonacci(n) {
  if (typeof n !== "number" || n < 0) throw new Error("Invalid input");
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.slice(0, n);
}

// 3. capitalizeWords: capitalize the first letter of each word
function capitalizeWords(sentence) {
  if (typeof sentence !== "string") return "";
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// 4. flattenArray: flatten a nested array recursively
function flattenArray(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be array");
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val),
    []
  );
}

module.exports = { isPrime, fibonacci, capitalizeWords, flattenArray };