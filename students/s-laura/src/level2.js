// Function 1: Capitalize first letter of each sentence 
function capitalizeSentences(text) {
  if (typeof text !== "string") throw new Error("Input must be a string");
  
  return text
    .split(/([.!?]\s*)/)
    .map((part, index) => {
      if (index % 2 === 0 && part.trim().length > 0) {
        return part.charAt(0).toUpperCase() + part.slice(1);
      }
      return part;
    })
    .join("");
}

// Function 2: Count character frequency 
function charFrequency(text) {
  if (typeof text !== "string") throw new Error("Input must be a string");
  
  const frequency = {};
  const normalized = text.toLowerCase().replace(/[^a-z]/g, "");
  
  for (const char of normalized) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  
  return frequency;
}

// Function 3: Check if string is a valid phone number (format: XXX-XXX-XXXX)
function isValidPhone(phone) {
  if (typeof phone !== "string") throw new Error("Input must be a string");
  
  const pattern = /^\d{3}-\d{3}-\d{4}$/;
  return pattern.test(phone);
}

module.exports = { capitalizeSentences, charFrequency, isValidPhone };