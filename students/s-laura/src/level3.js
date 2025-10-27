// Function 1: Prime number checker with factors
function analyzePrime(num) {
  if (typeof num !== "number" || !Number.isInteger(num)) {
    throw new Error("Input must be an integer");
  }
  if (num < 1) throw new Error("Input must be a positive integer");
  
  if (num === 1) {
    return {
      isPrime: false,
      factors: [1],
      divisorCount: 1
    };
  }
  
  const factors = [];
  let divisorCount = 0;
  
  // Find all factors
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factors.push(i);
      divisorCount++;
      if (i !== num / i) {
        factors.push(num / i);
        divisorCount++;
      }
    }
  }
  
  factors.sort((a, b) => a - b);
  const isPrime = divisorCount === 2;
  
  return {
    isPrime,
    factors,
    divisorCount
  };
}

// Function 2: Calculate array metrics (mode and range) 
function arrayMetrics(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input must be a non-empty array");
  }
  
  for (const num of numbers) {
    if (typeof num !== "number" || isNaN(num)) {
      throw new Error("All elements must be valid numbers");
    }
  }
  
  const frequency = {};
  let maxFreq = 0;
  let mode = null;
  
  for (const num of numbers) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      mode = num;
    }
  }
  
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const range = max - min;
  
  return {
    mode,
    range,
    frequency: maxFreq
  };
}

// Function 3: Fibonacci sequence generator
function fibonacciSequence(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new Error("Input must be an integer");
  }
  if (n < 0) throw new Error("Input must be non-negative");
  
  if (n === 0) return [];
  if (n === 1) return [0];
  
  const sequence = [0, 1];
  
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  
  return sequence;
}

module.exports = { analyzePrime, arrayMetrics, fibonacciSequence };