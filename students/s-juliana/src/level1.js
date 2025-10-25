// --- Function 1 ---
function addTwoNumbers(a, b) {
  if (typeof a !== "number" || isNaN(a)) throw new Error("Input must be a number");
  if (typeof b !== "number" || isNaN(b)) throw new Error("Input must be a number");
  return a + b;
}

// --- Function 2 ---
function isNum(num) {
  if (typeof num !== "number" || isNaN(num)) throw new Error("Input must be a number");
  return typeof num === "number" && !isNaN(num);
}

// --- Function 3 ---
function isEven(num) {
  if (typeof num !== "number" || isNaN(num)) throw new Error("Input must be a number");
  return num % 2 === 0;
}

// Export so Jest can use them
module.exports = { addTwoNumbers, isNum, isEven };