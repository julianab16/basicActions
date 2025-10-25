//funcion 1
function sumOfUnique(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  const counts = {};
  arr.forEach(num => {
    if (typeof num !== "number") throw new Error("Array must contain only numbers");
    counts[num] = (counts[num] || 0) + 1;
  });
  return Object.keys(counts)
    .filter(key => counts[key] === 1)
    .reduce((acc, val) => acc + Number(val), 0);
}

//funcion 2

function flattenArray(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  const result = [];
  (function flat(inner) {
    for (const item of inner) {
      if (Array.isArray(item)) {
        flat(item);
      } else {
        result.push(item);
      }
    }
  })(arr);
  return result;
}

//funcion 3

function findSecondLargest(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  if (arr.length < 2) throw new Error("Array must contain at least two numbers");

  let max = -Infinity;
  let second = -Infinity;

  for (const num of arr) {
    if (typeof num !== "number") throw new Error("Array must contain only numbers");
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num < max) {
      second = num;
    }
  }

  if (second === -Infinity) throw new Error("No second distinct largest number");
  return second;
}

module.exports = { findSecondLargest, sumOfUnique, flattenArray };