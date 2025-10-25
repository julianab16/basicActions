//funtion 1
function findDuplicates(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");

  const seen = new Map(); 
  const duplicates = new Set();

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.set(item, i);
    }
  }


  return Array.from(duplicates).sort((a, b) => seen.get(a) - seen.get(b));
}
//funcion 2

function getStatistics(array) {
  if (!Array.isArray(array) || array.length === 0)
    throw new Error("Input must be a non-empty array");

  const nums = [...array].sort((a, b) => a - b);
  const min = nums[0];
  const max = nums[nums.length - 1];
  const avg = nums.reduce((acc, n) => acc + n, 0) / nums.length;

  let median;
  const mid = Math.floor(nums.length / 2);
  median = nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;

  return { min, max, average: avg, median };
}
//funcion 3
function compressString(text) {
  if (typeof text !== 'string' || text.length === 0) return '';

  let result = '';
  let count = 1;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) {
      count++;
    } else {
      result += text[i] + count;
      count = 1;
    }
  }

  return result;
}

module.exports = { findDuplicates, getStatistics, compressString };