// 11.	Conversión de Temperaturas
// •	Crea funciones para convertir temperaturas entre Celsius, Fahrenheit y Kelvin. Usa estas funciones en un programa que tome una temperatura y la convierta a las otras dos unidades.

let escala = '';
let entradaGrados = 0;
let celsius = 0;
let fahrenheit = 0;
let kelvin = 0;

function conversionACelsius(escala, grados){
    let celsius = 0;
    switch (escala) {
        case '1':
            celsius = grados;
            break;
        case '2':
            celsius = (grados - 32) * (5/9);
            break;
        case '3':
            celsius = grados - 273.15;
            break;
        default:
            alert('Algo ha salido mal.');
    }
    return parseFloat(celsius.toFixed(2));
}

function conversionAFahrenheit(escala, grados) {
    let fahrenheit = 0;
    switch (escala) {
        case '1':
            fahrenheit = (grados * 9/5) + 32;
            break;
        case '2':
            fahrenheit = grados;
            break;
        case '3':
            fahrenheit = (grados - 273.15) * (9/5) + 32;
            break;
        default:
            alert('Algo ha salido mal.');
    }
    return parseFloat(fahrenheit.toFixed(2));
}

function conversionAKelvin(escala, grados){
    let kelvin = 0;
    switch (escala) {
        case '1':
            kelvin = grados + 273.15;
            break;
        case '2':
            kelvin = (grados - 32) * (5/9) + 273.15;
            break;
        case '3':
            kelvin = grados;
            break;
        default:
            alert('Algo ha salido mal.');
    }
    return parseFloat(kelvin.toFixed(2));
}

for(let i=0; i<2; i++){
    while(true){
        if (i==0){
            entradaGrados = parseFloat(prompt('Indique los grados en cualquier escala: '));
            if (!isNaN(entradaGrados)){
                break;
            } else {
                alert("Por favor, indique una cantidad numérica.");
            }
        } else {
            escala = prompt('Ingrese el número de la opción de la escala de los grados que ingresó:\n1) Celsius (°C)\n2) Fahrenheit (°F)\n3) Kelvin (K).');
            if ((escala == '1') || (escala == '2') || (escala == '3')){
                break;
            } else {
                alert('Por favor, ingrese una opción válida.');
            }
        }
    }
}

console.log(`°C: ${conversionACelsius(escala, entradaGrados)}\n°F: ${conversionAFahrenheit(escala, entradaGrados)}\nK:${conversionAKelvin(escala, entradaGrados)}`);