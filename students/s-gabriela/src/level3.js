//function 1

function fibonacciSerie(n){

  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new Error("El parametro debe ser un numero entero");
  }
  if (n < 0) {
    throw new Error("El parametro debe ser no negativo");
  }
  if (n > 40) {
    throw new Error("Numero demasiado grande para fibonacci recursivo");
  }

  if (n === 0) return 1;
  if (n === 1) return 1;

  let a = 1;
  let b = 1; 
  for (let i = 2; i <= n; i++) {
    const next = a + b; 
    a = b;
    b = next;
  }
  return b; 
}

module.exports = { fibonacciSerie };
