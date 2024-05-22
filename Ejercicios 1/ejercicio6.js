// 6.	Función de Fibonacci
// •	Escribe una función fibonacci que devuelva el n-ésimo número en la secuencia de Fibonacci.

let entrada = 0;


const fibonacci = (posicion) => {

    let secuencia = [];

    for (let i=0; i<posicion; i++){
        if (i == 0){
            secuencia.push(0);
        } else if (i==1){
            secuencia.push(1);
        } else{
            secuencia.push(secuencia[i-2] + secuencia[i-1]);
        }
    }

    return secuencia[secuencia.length - 1];
}

while (true){
    entrada = parseInt(prompt('Ingrese el número de posición de la secuencia fibonacci que desea consultar: '));
    if (!isNaN(entrada) && entrada>0){
        break;
    } else {
        alert("Por favor, ingrese un número positivo entero.");
    }
}

console.log(`La posición ${entrada} de la secuencia Fibonacci está ocupada por el número: ${fibonacci(entrada)}`);