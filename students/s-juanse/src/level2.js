// Level 2 – Logic and conditions 

// Function 1
function kebabToSnake(text) {
  if (typeof text !== 'string') throw new Error('Input must be a string');
  return text.replace(/-/g, '_');
}

// Function 2
function secondLargest(arr) {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');
  const nums = arr.filter(x => typeof x === 'number' && !Number.isNaN(x));
  if (nums.length < 2) return null;
  const unique = Array.from(new Set(nums));
  unique.sort((a, b) => b - a); 
  return unique[1];
}

// Function 3
function validatePhoneSimple(phone) {
  if (typeof phone !== 'string') throw new Error('Input must be a string');
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

module.exports = { kebabToSnake, secondLargest, validatePhoneSimple };
