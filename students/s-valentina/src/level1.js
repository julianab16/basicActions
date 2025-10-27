// --- Function 1 ---
function capitalizeWords(str) {
  if (typeof str !== "string") throw new Error("Input must be a string");
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
// --- Function 2 ---
function reverseString(str) {
  if (typeof str !== "string") throw new Error("Input must be a string");
  return str.split("").reverse().join("");
}

// --- Function 3 ---
function countVowels(text) {
  if (typeof text !== "string") throw new Error("Input must be a string");
  const matches = text.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g);
  return matches ? matches.length : 0;
}

// Export so Jest can use them
module.exports = { capitalizeWords, reverseString, countVowels };