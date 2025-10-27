//function 1

function fibonacciSerie(n){
  // Validaciones para nivel 3
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new Error("El parametro debe ser un numero entero");
  }
  if (n < 0) {
    throw new Error("El parametro debe ser no negativo");
  }
  if (n > 40) {
    throw new Error("Numero demasiado grande para fibonacci recursivo");
  }

  // Casos base corregidos
  if (n === 0) return 1;
  if (n === 1) return 1;
  
  // Llamada recursiva corregida
  return fibonacciSerie(n - 1) + fibonacciSerie(n - 2);
}

module.exports = { fibonacciSerie };