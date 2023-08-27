function sumaNumeros(a, b) {
    return a + b;
}

function divisionNumeros(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "No se puede dividir por cero. Por favor pruebe con otro número.";
    }
}

function mayorValor(array) {
    if (array.length === 0) {
        return "El array está vacío.";
    }
  
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
  
    return max;
}


const resultadoSuma = sumaNumeros(5, 10);
const resultadoDivision = divisionNumeros(20, 2);
const resultadoDivisionConCero = divisionNumeros(20, 0);
const arrayNumeros = [2,8,9,7,5,6];
const resultadoMayor = mayorValor(arrayNumeros);


console.log("Suma entre 5 y 10: ", resultadoSuma);
console.log("División entre 20 y 2: ", resultadoDivision);
console.log("División entre 20 y 0: ", resultadoDivisionConCero);
console.log("El número mas alto del array es: ", resultadoMayor);