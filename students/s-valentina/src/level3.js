// --- Function 1 ---
// Calculates the sum of all digits in a number
function sumOfDigits(num) {
  if (typeof num !== "number" || isNaN(num)) throw new Error("Input must be a number");
  return Math.abs(num)
    .toString()
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
}

// --- Function 2 ---
// Finds maximum and minimum values in an array
function findMaxMin(arr) {
  if (!Array.isArray(arr) || arr.length === 0 || arr.some(isNaN)) {
    throw new Error("Input must be a non-empty array of numbers");
  }
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}

// --- Function 3 ---
// Counts the frequency of each word in a string
function wordFrequency(text) {
  if (typeof text !== "string") throw new Error("Input must be a string");
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  return words.reduce((freq, word) => {
    freq[word] = (freq[word] || 0) + 1;
    return freq;
  }, {});
}

// Export so Jest can use them
module.exports = { sumOfDigits, findMaxMin, wordFrequency };