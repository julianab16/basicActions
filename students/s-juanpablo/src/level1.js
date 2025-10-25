//funtion 1
function countWords(text) {
  if (typeof text !== "string") throw new Error("Input must be a string");

  const clean = text.trim().replace(/[.,!?;:()]/g, "");
  if (clean === "") return 0;
  return clean.split(/\s+/).length;
}

//function 2
function averageArray(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  if (arr.length === 0) return 0;
  const total = arr.reduce((acc, val) => {
    if (typeof val !== "number") throw new Error("Array must contain only numbers");
    return acc + val;
  }, 0);
  return total / arr.length;
}

//funtion 3

function reverseNumber(num) {
  if (typeof num !== "number" || isNaN(num)) throw new Error("Input must be a valid number");

  const sign = Math.sign(num);
  const reversed = parseFloat(Math.abs(num).toString().split("").reverse().join(""));
  return reversed * sign;
}

// Export so Jest can use them
module.exports = { countWords, averageArray, reverseNumber };