const { cuadrado, multiplicacionLista } = require("../src/level1");

describe("Level 1 - multiplicacionLista", () => {
  test("Multiplica los numeros de una lista por un numero", () => {
    expect(multiplicacionLista([1,2,3,4,5,6,7,8], 4)).toEqual([4,8,12,16,20,24,28,32]);
  });

  test("Retorna un error si la lista contiene un elemento que no es un numero", () => {
    expect(() => {
      multiplicacionLista([1,3,"abc",5], 2);
    }).toThrow("El arreglo contiene elementos que no son numeros");
  });
})
//--------------------------------------------------------------------
describe("Level 1 - cuadrado", () => {
  test("Calcula el cuadrado de un numero positivo", () => {
    expect(cuadrado(5)).toBe(25);
  });

  test("Calcula el cuadrado de un numero negativo", () => {
    expect(cuadrado(-3)).toBe(9);
  });

  test("Calcula el cuadrado de cero", () => {
    expect(cuadrado(0)).toBe(0);
  });

  test("Retorna error si no es un numero", () => {
    expect(() => {
      cuadrado("abc");
    }).toThrow("Ingrese un numero");
  });})
//--------------------------------------------------------------------