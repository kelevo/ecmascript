//PARAMETROS POR DEFECTO
//antes de es6
function newFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}
//con es6
function newFunction2(name = 'Oscar', age = 32, country = "MX") {
    console.log(name, age, country);
} 
//Llamada a la funcion, si no le pasamos parametros toma los que viene por defecto
//si le pasamos parametros los va a sustituir
newFunction2();
newFunction2('Juan', '40', "MX");

//--------------------------------------------------------------------------------------

//TEMPLATE LITERALS, separar o unir varios elementos
let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

letPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)

//-------------------------------------------------------------------------------------

//MULTILINEA EN STRINGS
//antes de es6
let lorem = "Una frase epica, comenzamos... \n"
+ "Otra frase epica, seguimos..."
//con es6
let lorem2 = `Una frase epica, comenzamos...
Otra frase epica, seguimos...`;
//imprimirmos
console.log(lorem);
console.log(lorem2);

//---------------------------------------------------------------------------------------

//DESTRUCTURACION DE OBJETOS
let person = {
    name: 'patrick',
    age: 23,
    country: 'MX'
}
//forma normal de mandar a imprimir elementos del objeto
console.log(person.name, person.age, person.country);
//Con destructuracion
let { name, age, country } = person;
console.log(name, age, country);

//-------------------------------------------------------------------------------------

//OPERADOR DE PROPAGACION
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yessica', 'Camila'];

let education = ['Patrick', ...team1, ...team2];
console.log(education)

//--------------------------------------------------------------------------------------

//let
//Con let las variables solo estan disponibles dentro del bloque
//de codigo donde seran llamadas

//const
//Son constantes, no reasignables...

//-------------------------------------------------------------------------------------

//OBJETOS
let name = 'Oscar';
let age = 32;
//antes de es6
obj = { name: name, age: age };
//con es6
obj2 = { name, age };
console.log(obj2)

//----------------------------------------------------------------------------------

//ARROW FUNCTIONS
const names = [
    {name: 'Oscar', age: 32},
    {name: 'Yessica', age: 27}
]
//sin arrow function
let listOfNames = names.map(function (item) {
    console.log(iten.name);
})
//con arrow function
let listOfNames2 = names.map(item => console.log(item.name));
//otra forma de poder encontrar a las arrow functions
const listOfNames3 = (name, age) => {
    //codigo
}
//Otra forma de poder encontrar a las arrow functions
const listOfNames4 = name => {
    //codigo
}
//Otra forma de poder encontrar a las arrow functions
//recibe un parametro "numero" y retorna numero por numero
const square = num => num * num;

//--------------------------------------------------------------------------------

//PROMESAS (ALGO VA A PASAR)
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}
//Ejecutar la promesa
helloPromise()
    //.then nos permite obtener la respuesta
    .then(response => console.log(response))
    //.catch recibe el error o lo que no ha sido correcto
    .catch(error => console.log(error));

//-------------------------------------------------------------------------------

//CLASES
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    //Metodo
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
//llamada
const calc = new calculator();
console.log(calc.sum(2, 2));

//---------------------------------------------------------------------------------

//IMPORT Y EXPORT
//trabajando con modulos

import { hello } from './module';
//llamada
hello();

//------------------------------------------------------------------------------

//GENERATORS
//es una funcnion especial que retorna una serie de valores, segun el algoritmo definido
function* helloWorld() {
    if (true) {
        //yiel permite retornar algo y guarda el estado de forma interna
        //en este caso un string
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};
//ejecucion
const generatorHello = helloWorld();
//next nos va a devolver el primer valor, despues al volverlo a ejecutar el recordara
//cual fue el anterior valor y nos mandara al siguiente, y asi por cada uno de los steps
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);