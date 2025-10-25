const { findSecondLargest, sumOfUnique, flattenArray } = require("../src/level2");

describe("sumOfUnique", () => {
    test("suma solo los números únicos", () => {
      expect(sumOfUnique([1, 2, 3, 2, 1, 4])).toBe(7); // únicos: 3 + 4
    });

    test("retorna 0 si todos los números se repiten", () => {
      expect(sumOfUnique([5, 5, 5, 5])).toBe(0);
    });

    test("lanza error si hay elementos no numéricos", () => {
      expect(() => sumOfUnique([1, "2", 3])).toThrow("Array must contain only numbers");
    });
  });

//--------------------------------------------------------------------
describe("flattenArray", () => {
    test("aplana correctamente un arreglo anidado", () => {
      expect(flattenArray([1, [2, [3, 4]], 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test("retorna el mismo arreglo si ya está plano", () => {
      expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test("lanza error si la entrada no es un arreglo", () => {
      expect(() => flattenArray("no-array")).toThrow("Input must be an array");
    });
  });

//--------------------------------------------------------------------
describe("findSecondLargest", () => {
    test("encuentra el segundo número más grande", () => {
      expect(findSecondLargest([10, 5, 8, 20, 15])).toBe(15);
    });

    test("funciona con números negativos", () => {
      expect(findSecondLargest([-3, -1, -5, -2])).toBe(-2);
    });

    test("lanza error si hay menos de dos elementos", () => {
      expect(() => findSecondLargest([42])).toThrow("Array must contain at least two numbers");
    });
});
