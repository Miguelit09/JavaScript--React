// 10.	Contador
// •	Crea una función crearContador que devuelva otra función que incremente un contador interno y lo devuelva cada vez que sea llamada. Demuestra cómo el contador mantiene su estado entre llamadas.



function crearContador() {
    let contador = 0; // Contador interno

    return function() { // Función interna
        contador++; // Incrementa el contador
        return contador; // Devuelve el valor del contador
    };
}

  // Crear una instancia del contador
const contador1 = crearContador();

console.log(contador1()); // Salida: 1
console.log(contador1()); // Salida: 2
console.log(contador1()); // Salida: 3

// Crear una nueva instancia del contador
const contador2 = crearContador();

console.log(contador2()); // Salida: 1
console.log(contador2()); // Salida: 2
