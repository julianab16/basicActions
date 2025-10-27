// Level 3 – Algorithms and metrics 

// Function 1
function isPrime(n) {
  if (!_isValidFiniteInteger(n)) throw new Error('Input must be a finite number');
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0) return false;
  return !_hasOddFactorUpToSqrt(n);
}
// Helper: validate and integer check
function _isValidFiniteInteger(n) {
  return typeof n === 'number' && Number.isFinite(n) && Math.floor(n) === n;
}
function _hasOddFactorUpToSqrt(n) {
  const limit = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return true;
  }
  return false;
}

// Function 2
function binarySearch(sortedArr, target) {
  if (!Array.isArray(sortedArr)) throw new Error('First argument must be an array');
  let lo = 0;
  let hi = sortedArr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const val = sortedArr[mid];
    if (val === target) return mid;
    if (val < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

// Function 3
function sumOfDigits(num) {
  if (typeof num !== 'number' || Number.isNaN(num)) throw new Error('Input must be a number');
  const s = Math.abs(Math.trunc(num)).toString();
  return s.split('').reduce((acc, d) => acc + Number(d), 0);
}

module.exports = { isPrime, binarySearch, sumOfDigits };
