// 7.	Calculadora Simple
// •	Crea una función calculadora que tome tres argumentos: dos números y una cadena representando una operación (+, -, *, /) y devuelva el resultado de la operación.

let entrada = '';
let simbolosValidos = ['+', '-', '*', '/']

const sumar = (a,b) => {
    return a + b;
}

const restar = (a,b) => {
    return a - b;
}

const multiplicar = (a,b) => {
    return a * b;
}

const dividir = (a,b) => {
    return a / b;
}

function calculadora(a, b, operacion){
    switch (operacion){
        case '+':
            resultado = sumar(a, b);
            break;
        case '-':
            resultado = restar(a, b);
            break;
        case '*':
            resultado = multiplicar(a, b);
            break;
        case '/':
            resultado = dividir(a, b);
            break;
        default:
            resultado = 'sintaxError'
    }
    return resultado
}

while (true){
    entrada = prompt('Ingresa la operación que deseas realizar, separando los argumentos con un espacio.\nEjemplos:\n3 + 5\n6 - 2\n8 * 10\n14 / 2');

    elementos = entrada.split(' ');
    if (elementos.length === 3){
        elementos[0] = parseFloat(elementos[0]);
        elementos[2] = parseFloat(elementos[2]);
        if (!isNaN(elementos[0]) && !isNaN(elementos[2]) && (simbolosValidos.includes(elementos[1]))){
            break;
        } else{
            alert("La entrada no coincide con un formato válido de calculadora.");
        }
    } else {
        alert("La entrada no coincide con un formato válido de calculadora.");
    }
}


console.log(`Operación: ${entrada} = ${calculadora(elementos[0], elementos[2], elementos[1])}`);