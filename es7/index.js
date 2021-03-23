//INCLUDE
//permite saber si hay un elemento dentro de este valor en un array o string
let numbers = [1, 2, 3, 4, 7, 8];
//dentro de include va el parametro que deseamos verificar
if (numbers.includes(7)) {
    console.log('Si se encuentra el valor 7.');
} else {
    console.log('No se encuentra.');
}

//-------------------------------------------------------------------------------

//POTENCIAS
let base = 4;
let exponent = 3;
let result = base ** exponent;
//con ** elevamos automaticamente a la potencia
console.log(result);