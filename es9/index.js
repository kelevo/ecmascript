//OPERADOR DE REPOSO
//puede extraer las propiedades de un objeto que aun no se ha construdo
const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
};
//destructuracion
let { country, ...all } = obj;
console.log(all);

//--------------------------------------------------------------------------

//PROPIEDADES DE PROPAGACION
//utilizando propiedades de propagacion vamos a poder
//unir cuantos elemtos querramos de objetos a otro objeto
const obj = {
    name: 'Oscar',
    age: 32
};
//en el siguiente objeto, metemos el anterior objeto
const obj1 = {
    ...obj,
    country: 'MX'
}
//impresion
console.log(obj1);

//---------------------------------------------------------------------------

//PROMISE.FINALLY
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            //? resolve('Hello World')
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
};
//llamada
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    //tenemos una nueva forma de llamar a lo que termino
    //cuando sabemos que la promea fue completada o rechazada
    .finally(() => console.log('Finalizado'))

//-----------------------------------------------------------------------------

//MEJORAS EN REJEX
//como mostrara la fecha, (anio, mes, dia)
//anio => del 0 al 9 con 4 digitos
//anio => del 0 al 9 con 4 digitos
//mes => del 0 al 9 con 2 digitos
//dia => del 0 al 9 con 2 digitos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
//match que verifica que la informacion es correcta de acuerdo al formato
const match = regexData.exec('2021-03-22');
//acceder a informacion especifica
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day);
