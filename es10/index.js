//ARRAY.FLAT
//devolver una matriz con cualquiee submatriz aplanada
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
//.flat nos imprime la profundidad, si lo mandamos solo asi
//array.flat(), nos va a imprimir con una profuncidad, osea el
//array tal cual es...
console.log(array.flat());
console.log(array.flat(2));

//-----------------------------------------------------------------------

//FLATMAP
//nos va a permitir mapear cada elemento, pasarle una funcion y despues
//aplanarlo segun la funcion dada
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));

//-----------------------------------------------------------------------

//TRIMSTART
//elimina espacios al inicio del texto
let hello = '         hello world';
//impresion con espacios
console.log(hello);
//impresion sin espacios
console.log(hello.trimStart());

//TRIMEND
//elimina los espacios al final del texto
let hello = 'hello world            ';
//impresion con espacios
console.log(hello)
//impresion sin espacios
console.log(hello.trimEnd());

//-------------------------------------------------------

//OPCIONAL CATCH BUILDING
//podemos no implementar el error en el try catch

//-------------------------------------------------------

//FROM ENTRIES
//transforma clave valor a objetos
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

//---------------------------------------------------------

//OBJETO DE TIPO SIMBOLO

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);