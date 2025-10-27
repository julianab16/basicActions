// LEVEL 1 – Basic Logic

function isPalindrome(word) {
  if (typeof word !== "string") return false;
  const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

function sumArray(numbers) {
  if (!Array.isArray(numbers)) throw new Error("Input must be an array");
  return numbers.reduce((sum, n) => sum + (typeof n === "number" ? n : 0), 0);
}

function countVowels(text) {
  if (typeof text !== "string") return 0;
  const vowels = text.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

function findLargest(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return undefined;
  return Math.max(...numbers.filter((n) => typeof n === "number"));
}

module.exports = { isPalindrome, sumArray, countVowels, findLargest };