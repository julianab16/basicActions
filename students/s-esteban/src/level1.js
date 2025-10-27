// LEVEL 1 – Basic Logic

// first function
function isPalindrome(word) {
  if (typeof word !== "string") return false;
  const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

// second function
function sumArray(numbers) {
  if (!Array.isArray(numbers)) throw new Error("Input must be an array");
  return numbers.reduce((sum, n) => sum + (typeof n === "number" ? n : 0), 0);
}

// third function
function countVowels(text) {
  if (typeof text !== "string") return 0;
  const vowels = text.match(/[aeiouáéíóú]/gi);
  return vowels ? vowels.length : 0;
}

module.exports = { isPalindrome, sumArray, countVowels };