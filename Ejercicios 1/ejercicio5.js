// 5.	Función de Factorial
// •	Crea una función factorial que calcule el factorial de un número dado.

// FACTORIAL ITERATIVO

// let entrada = 0;

const factorialIterativo = function(num) {
    factorial = 1;
    for(let i=num; i>0; i--){
        factorial *= i;
    }
    return factorial;
}

while (true){
    entrada = parseInt(prompt('Ingrese el número del que desea calcular el factorial: '));
    if (!isNaN(entrada) && entrada>=0){
        break;
    }
    else {
        alert('Por favor, ingresa un número entero positivo.');
    }
}

console.log(`El factorial de ${entrada} es: ${factorialIterativo(entrada)}`);

// -----------------------------------------------------------------------------------

// FACTORIAL RECURSIVO

let entrada = 0;

function factorialRecursivo(num) {
    if (num>0){
        return factorialRecursivo(num-1) * num;
    } else {
        return 1;
    }
}

while (true){
    entrada = parseInt(prompt('Ingrese el número del que desea calcular el factorial: '));
    if (!isNaN(entrada) && entrada>=0){
        break;
    }
    else {
        alert('Por favor, ingresa un número entero positivo.');
    }
}

console.log(`El factorial de ${entrada} es: ${factorialRecursivo(entrada)}`);
