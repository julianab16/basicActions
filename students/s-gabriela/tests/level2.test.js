const { contarPalabra, numerosMenoresA } = require("../src/level2");

describe("Level 2 - contarPalabra", () => {
  test("Cuenta correctamente las ocurrencias de una palabra", () => {
    expect(contarPalabra("hola mundo hola", "hola")).toBe(2);
  });

  test("Retorna 0 si la palabra no existe", () => {
    expect(contarPalabra("hola mundo", "adios")).toBe(0);
  });

  test("Cuenta una sola palabra en frase de una palabra", () => {
    expect(contarPalabra("hola", "hola")).toBe(1);
  });

  test("Primer parametro no es una cadena de texto", () => {
    expect(() => {
      contarPalabra(123, "hola");
    }).toThrow("Las entradas deben de ser cadenas de texto");
  });

  test("Segundo parametro no es una palabra o cadena de texto", () => {
    expect(() => {
      contarPalabra("hola mundo", 123);
    }).toThrow("Las entradas deben de ser cadenas de texto");
  });
})
//--------------------------------------------------------------------

describe("Level 2 - numerosMenoresA", () => {
  test("Filtra numeros menores correctamente", () => {
    expect(numerosMenoresA([1, 5, 3, 8, 2], 5)).toEqual([1, 3, 2]);
  });

  test("Retorna array vacio si ningun numero es menor", () => {
    expect(numerosMenoresA([10, 15, 20], 5)).toEqual([]);
  });

  test("Maneja numeros negativos", () => {
    expect(numerosMenoresA([-1, 2, -5, 3], 0)).toEqual([-1, -5]);
  });

  test("Maneja numeros decimales", () => {
    expect(numerosMenoresA([1.5, 2.7, 0.5], 2)).toEqual([1.5, 0.5]);
  });

  test("Lanza error si primer parametro no es array", () => {
    expect(() => {
      numerosMenoresA("no es array", 5);
    }).toThrow("El primer parametro debe ser un array");
  });

  test("Lanza error si segundo parametro no es numero", () => {
    expect(() => {
      numerosMenoresA([1, 2, 3], "no es numero");
    }).toThrow("El segundo parametro debe ser un numero");
  });

  test("Lanza error si array contiene elementos no numericos", () => {
    expect(() => {
      numerosMenoresA([1, "abc", 3], 5);
    }).toThrow("El array debe contener solo numeros");
  });
})

//--------------------------------------------------------------------
