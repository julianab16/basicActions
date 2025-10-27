// --- Function 1 ---
function filterEvenNumbers(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  return arr.filter(num => {
    if (typeof num !== "number" || isNaN(num))
      throw new Error("All elements must be numbers");
    return num % 2 === 0;
  });
}

// --- Function 2 ---
function getLongestWord(sentence) {
  if (typeof sentence !== "string") throw new Error("Input must be a string");
  const words = sentence.trim().split(/\s+/);
  if (words.length === 0 || (words.length === 1 && words[0] === "")) return "";
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) longest = words[i];
  }
  return longest;
}

// --- Function 3 ---
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) result.push(arr[i]);
  }
  return result;
}

// Export so Jest can use them
module.exports = { filterEvenNumbers, getLongestWord, removeDuplicates };