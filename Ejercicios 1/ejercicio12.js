// 12.	Números Primos
// •	Escribe una función esPrimo que determine si un número es primo y otra función primosHasta que devuelva un array de todos los números primos hasta un número dado.

function esPrimo(num){
    let primo = true;
    for (let i=2; i<8; i++){
        if ((num%i === 0) ){
            if (i !== num){
                primo = false;
                break;
            }
        }
    }
    if (primo) {
        resultado = 'Verdadero';
    } else {
        resultado = 'Falso';
    }

    return resultado;
}

function primosHasta(num) {
    let listaPrimos = [];
    for(let i=2; i<=num; i++){
        if(esPrimo(i) === 'Verdadero'){
            listaPrimos.push(i);
        }
    }
    return listaPrimos;
}


while (true){
    entrada = parseInt(prompt(`Ingrese un número entero positivo:`));
    if (!isNaN(entrada) && (entrada>0)){
        break;
    } else {
        alert("Por favor, ingrese un número válido.")
    }
}

console.log(`Número ingresado: ${entrada}.\n¿Es primo? ${esPrimo(entrada)}.\nLista de primos hasta el número ${entrada}:\n ${primosHasta(entrada)}`);