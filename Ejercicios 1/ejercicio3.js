// 3.	Conversión de Unidades
// •	Escribe un programa que convierta una cantidad de metros ingresada por el usuario a kilómetros, centímetros y milímetros.

let metros = 0;

while (true){
    metros = parseFloat(prompt("Ingrese la cantidad en metros a calcular: "));
    if (!isNaN(metros)){
        break;
    } else {
        alert("Por favor, ingrese una cantidad númerica.")
    }
}

let kilometros = metros / 1000;
let centimetros = metros * 100;
let milimetros = metros * 1000;

console.log(`Metros: ${metros}\nKilómetros: ${kilometros}\nCentímetros: ${centimetros}\nMilímetros: ${milimetros}`);