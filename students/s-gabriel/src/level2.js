// LEVEL 2 – Intermediate Logic

// 1. reverseWords: reverse each word but keep order
function reverseWords(sentence) {
  if (typeof sentence !== "string") return "";
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

// 2. factorial: recursive factorial
function factorial(n) {
  if (typeof n !== "number" || n < 0) throw new Error("Invalid input");
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// 3. removeDuplicates: return array without duplicates
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be array");
  return [...new Set(arr)];
}

// 4. countOccurrences: count how many times a value appears in array
function countOccurrences(arr, value) {
  if (!Array.isArray(arr)) throw new Error("Input must be array");
  return arr.filter((item) => item === value).length;
}

module.exports = { reverseWords, factorial, removeDuplicates, countOccurrences };
