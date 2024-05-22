// 1. Intercambio de Variables
// Escribe un programa que intercambie los valores de dos variables sin usar una tercera variable auxiliar.

// Método aritmético

let a = 10;
let b = 15;
console.log(`Antes del intercambio: a=${a} y b=${b}`);

a = a + b;
b = a - b;
a = a - b;

console.log(`Después del intercambio: a=${a} y b=${b}`);

// Destructuración de Arrays

let c = 20;
let d = 40;
console.log(`Antes del intercambio: c=${c} y d=${d}`);


[c, d] = [d, c];

console.log(`Después del intercambio: c=${c} y d=${d}`);
