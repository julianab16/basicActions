// LEVEL 2 – Intermediate Logic

// first function
function toTitleCase(text) {
  if (typeof text !== "string") return "";
  return text
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
// second function
function fizzBuzz(n) {
  if (typeof n !== "number" || n <= 0) throw new Error("Input must be positive number");
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i);
  }
  return result;
}

// third function
function isIsogram(word) {
  if (typeof word !== "string") return false;
  const cleaned = word.toLowerCase().replace(/[^a-z]/g, "");
  const letters = new Set(cleaned);
  return letters.size === cleaned.length;
}

module.exports = { toTitleCase, fizzBuzz, isIsogram };