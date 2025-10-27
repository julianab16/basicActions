// Level 1 – Basics 

// Function 1
function multiplyArray(nums) {
  if (!Array.isArray(nums)) throw new Error('Input must be an array');
  if (nums.length === 0) return 0; 
  return nums.reduce((acc, v) => {
    if (typeof v !== 'number' || Number.isNaN(v)) throw new Error('Array must contain only numbers');
    return acc * v;
  }, 1);
}

// Function 2
function countConsonants(text) {
  if (typeof text !== 'string') throw new Error('Input must be a string');
  const match = text.match(/[b-df-hj-np-tv-z]/gi);
  return match ? match.length : 0;
}

// Function 3
function medianArray(nums) {
  if (!Array.isArray(nums)) throw new Error('Input must be an array');
  const numbers = nums.slice().filter(n => typeof n === 'number' && !Number.isNaN(n));
  if (numbers.length === 0) return 0;
  numbers.sort((a, b) => a - b);
  const mid = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 1) return numbers[mid];
  return (numbers[mid - 1] + numbers[mid]) / 2;
}

module.exports = { multiplyArray, countConsonants, medianArray };
