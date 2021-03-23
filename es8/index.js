//OBJECT ENTRIES
//devuelve los valores de una matriz
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    dedign: 'Ana',
}
//como transformar este objeto a una matriz
const entries = Object.entries(data);
//Mostrando
console.log(entries);
//cuantos elementos tiene un objeto
console.log(entries.length);

//-------------------------------------------------------------

//OBJECT VALUES
//devuelve los valores de un objeto a un arreglo
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}
//Transformacion (Object va en mayusculas)
const values = Object.values(data);
console.log(values);
//Lo anterior ignorara las asignaciones (fontend, backend y design)
//Otra forma en la que podemos usarlo es
console.log(values.length);

//--------------------------------------------------------------

//PADDING
const string = 'hello';
//como podemos anteponer o agregar una cadena vacia o elementos a este string
//funcion de padStar (agrega al inicio) => (primer parametro = numero de caracteres)
//(segundo parametro = caracteres a agregar)
console.log(string.padStart(7, 'hi'));
//pasEnd funciona igual solo que agrega al final
console.log(string.padEnd(7, '=)'));

//------------------------------------------------------------

//ASYNC AWAIT
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}
//AsynC
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

//Como se debe de ejecutar correctamente
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();