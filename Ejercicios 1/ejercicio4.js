// 4.	Cálculo de Edad
// •	Escribe un programa que calcule la edad de una persona basándose en su año de nacimiento ingresado.

let añoActual = 2024;
let añoNacimiento = 0;
let nombre = prompt('¿Cuál es tu nombre?');

while (true){
    añoNacimiento = parseInt(prompt(`Por favor, ingresa tu año de nacimiento: `));
    if (!isNaN(añoNacimiento) && (añoNacimiento>1900) && (añoNacimiento<=añoActual)){
        break;
    } else {
        alert("Por favor, ingresa un número válido.");
    }
}

let edad = añoActual - añoNacimiento;

console.log(`${nombre}, tu edad es de ${edad} años.`);
