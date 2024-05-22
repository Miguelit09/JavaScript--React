// 2.	Operaciones Básicas
// •	Crea un programa que sume, reste, multiplique y divida dos números ingresados por el usuario.

let a = 0;
let b = 0;

for (let i=0; i<2; i++) {
    while (true) {
        if (i==0){
            a = parseFloat(prompt("Por favor, ingresa el primer número"));
            if (!isNaN(a)){
                break;
            } else {
                alert("Por favor, introduce un valor númerico.");
            }
        } else if(i==1){
            b = parseFloat(prompt("Por favor, ingresa el segundo número"));
            if (!isNaN(b)){
                break;
            } else {
                alert("Por favor, introduce un valor númerico.");
            }
        }
    }
}




let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;

console.log(`Número 1: ${a} -- Número 2: ${b}\n${a}+${b} = ${suma}\n${a}-${b} = ${resta}\n${a}*${b} = ${multiplicacion}\n${a}/${b} = ${division}`)