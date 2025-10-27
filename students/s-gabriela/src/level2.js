//function 1

function contarPalabra(frase, palabra){
    if (typeof frase !== "string" || typeof palabra !== "string") {
    throw new Error("Las entradas deben de ser cadenas de texto");
  }
  const palabras = frase.split(/\s+/)
  let cont = 0
  for (p of palabras){
    if (p === palabra){
      cont+= 1
    }
  }
  return cont
}

//function 2

function numerosMenoresA(lista, num){
    if (!Array.isArray(lista)) {
    throw new Error("El primer parametro debe ser un array");
  }
  if (typeof num !== "number") {
    throw new Error("El segundo parametro debe ser un numero");
  }
  const menores = [];
  for (let numero in lista){
    if (typeof lista[i] !== "number") {
      throw new Error("El array debe contener solo numeros");
    }
    if (lista[numero] < num){
      menores.push(lista[i]);
    }
  }
  return menores
}

module.exports = { contarPalabra, numerosMenoresA };