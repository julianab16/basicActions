const { fibonacciSerie } = require("../src/level3");

describe("Level 3 - fibonacciSerie", () => {
  test("Calcula fibonacci para n=0", () => {
    expect(fibonacciSerie(0)).toBe(1);
  });

  test("Calcula fibonacci para n=1", () => {
    expect(fibonacciSerie(1)).toBe(1);
  });


  test("Calcula fibonacci para n=5", () => {
    expect(fibonacciSerie(5)).toBe(8);
  });

  test("Calcula fibonacci para n=10", () => {
    expect(fibonacciSerie(10)).toBe(89);
  });

  test("Fibonacci para un n negativo", ()=> {
    expect(() => { fibonacciSerie(-3)}).toThrow("El parametro debe ser no negativo")})

  test("Lanza error si el parametro no es un numero", () => {
    expect(() => {
      fibonacciSerie("5");
    }).toThrow("El parametro debe ser un numero entero");
  });


  test("Lanza error si el numero es demasiado grande", () => {
    expect(() => {
      fibonacciSerie(41);
    }).toThrow("Numero demasiado grande para fibonacci recursivo");
  });

  test("Lanza error para numeros muy grandes", () => {
    expect(() => {
      fibonacciSerie(100);
    }).toThrow("Numero demasiado grande para fibonacci recursivo");
  });

  test("Maneja casos edge correctamente", () => {
    expect(fibonacciSerie(3)).toBe(3);
    expect(fibonacciSerie(7)).toBe(21);
  });
});