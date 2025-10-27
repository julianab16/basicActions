//function 1
function multiplicacionLista(lista, num){
  return lista.map(numero => {
    if (typeof numero !== "number") throw new Error("El arreglo contiene elementos que no son numeros");
    return numero * num;
  });
}

//function 2

function cuadrado(num){
  if (typeof num !== "number") throw new Error("Ingrese un numero")
  return num * num
}

// Export so Jest can use them
module.exports = { multiplicacionLista, cuadrado };