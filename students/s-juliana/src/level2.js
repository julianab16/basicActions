// Convierte cada palabra a Title Case
function titleCase(text) {
  if (typeof text !== "string") throw new Error("Input must be a string");
  return text.toLowerCase().replace(/\b\w+/g, w => w[0].toUpperCase() + w.slice(1));
}

// Genera la secuencia FizzBuzz desde 1 hasta n (incl.)
function fizzBuzz(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 1) throw new Error("Input must be a positive integer");
  return Array.from({ length: n }, (_, i) => {
    const v = i + 1;
    if (v % 15 === 0) return "FizzBuzz";
    if (v % 3 === 0) return "Fizz";
    if (v % 5 === 0) return "Buzz";
    return v;
  });
}

// Detecta si una palabra es isograma (sin letras repetidas). Ignora caracteres no alfabéticos y mayúsculas/minúsculas.
function isIsogram(word) {
  if (typeof word !== "string") throw new Error("Input must be a string");
  const normalized = word.toLowerCase().replace(/[^a-z]/g, "");
  const seen = new Set();
  for (const ch of normalized) {
    if (seen.has(ch)) return false;
    seen.add(ch);
  }
  return true;
}

module.exports = { titleCase, fizzBuzz, isIsogram };