// Function 1: Find the smallest number in an array 
function findMin(numbers) {
  if (!Array.isArray(numbers)) throw new Error("Input must be an array");
  if (numbers.length === 0) throw new Error("Array cannot be empty");
  
  for (const num of numbers) {
    if (typeof num !== "number" || isNaN(num)) {
      throw new Error("All elements must be valid numbers");
    }
  }
  
  return Math.min(...numbers);
}

// Function 2: Remove all spaces from a string 
function removeSpaces(text) {
  if (typeof text !== "string") throw new Error("Input must be a string");
  return text.replace(/\s+/g, "");
}

// Function 3: Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  if (typeof celsius !== "number" || isNaN(celsius)) {
    throw new Error("Input must be a valid number");
  }
  return (celsius * 9/5) + 32;
}

// Export so Jest can use them
module.exports = { findMin, removeSpaces, celsiusToFahrenheit };