// Mini calculadora con operaciones básicas (constante tiempo)
function miniCalculator(op, a, b) {
  const validOps = {
    "+": (x, y) => x + y,
    "add": (x, y) => x + y,
    "-": (x, y) => x - y,
    "sub": (x, y) => x - y,
    "*": (x, y) => x * y,
    "mul": (x, y) => x * y,
    "/": (x, y) => {
      if (y === 0) throw new Error("Division by zero");
      return x / y;
    },
    "div": (x, y) => {
      if (y === 0) throw new Error("Division by zero");
      return x / y;
    },
    "%": (x, y) => x % y,
    "mod": (x, y) => x % y,
    "^": (x, y) => Math.pow(x, y),
    "pow": (x, y) => Math.pow(x, y)
  };

  if (typeof a !== "number" || isNaN(a) || typeof b !== "number" || isNaN(b)) {
    throw new Error("Both operands must be numbers");
  }
  const fn = validOps[op];
  if (!fn) throw new Error("Unsupported operation");
  return fn(a, b);
}

// Validador/medidor de fuerza de contraseña (lineal)
function passwordStrength(password) {
  if (typeof password !== "string") throw new Error("Input must be a string");
  const length = password.length;
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);


  const suggestions = [];
  if (length < 8) suggestions.push("Use at least 8 characters");
  if (!hasLower) suggestions.push("Add lowercase letters");
  if (!hasUpper) suggestions.push("Add uppercase letters");
  if (!hasDigit) suggestions.push("Add digits");
  if (!hasSpecial) suggestions.push("Add special characters");

  return {
    suggestions
  };
}

// Factorial recursivo usando BigInt (lineal, cuidado con n grande)
function factorialRecursive(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) throw new Error("Input must be an integer");
  if (n < 0) throw new Error("Input must be non-negative");
  // Protege contra desbordamiento de pila en entornos JS normales
  if (n > 1000) throw new Error("Input too large for recursive factorial (use iterative for big n)");
  if (n === 0 || n === 1) return 1n;
  return BigInt(n) * factorialRecursive(n - 1);
}

module.exports = { miniCalculator, passwordStrength, factorialRecursive };