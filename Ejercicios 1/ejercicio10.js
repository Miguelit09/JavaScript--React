// 10.	Promedio de un Array
// •	Escribe una función promedio que tome un array de números y devuelva el promedio.

let listaNumeros = [];


function calcularPromedio(array) {
    let promedio = 0;
    array.forEach(element => {
        promedio += element;
    });
    promedio /= array.length;
    if (array.length > 0){
        return promedio;
    } else {
        return 0;
    }
}

while (true){
    let entrada = '';
    entrada = prompt(`Ingrese un número para añadirlo a la lista del promedio.\nPara dejar de agregar números, envía el campo en blanco.\nNúmeros en la lista: (${listaNumeros.length})`);
    if(!isNaN(parseFloat(entrada))){
        listaNumeros.push(parseFloat(entrada));
    } else if (entrada === ''){
        break;
    } else {
        alert('Por favor, ingrese sólo valores numéricos.');
    }
}

console.log(`Números ingresados: ${listaNumeros.length}\nPromedio: ${calcularPromedio(listaNumeros)}.`);