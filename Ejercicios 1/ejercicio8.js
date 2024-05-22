// 8.	Palíndromo
// •	Escribe una función esPalindromo que verifique si una cadena dada es un palíndromo (se lee igual al derecho y al revés).

let entrada = '';

function esPalindromo(cadena){
    cadena = cadena.toLowerCase();
    // Usando una expresión regular para eliminar signos de puntuación y espacios
    let cadenaSinSignos = cadena.replace(/[^\w]/g, '');
    arrayCadena = cadenaSinSignos.split('');
    arrayCadenaInvertida = arrayCadena.reverse();
    cadenaInvertida = arrayCadenaInvertida.join('');
    console.log(arrayCadena);
    return cadenaSinSignos === cadenaInvertida;
}

entrada = prompt('Ingrese una cadena de texto para comprobar si es palíndromo.')

if (esPalindromo(entrada)){
    console.log(`Entrada: ${entrada}\nEs palíndromo.`)
    
} else {
    console.log(`Entrada: ${entrada}\nNo es palíndromo.`)
}