const leia = require('readline-sync'); 

var array = []

var numero = leia.questionInt("Insira o Numero: ");

if (numero % 2 === 0) {
  array[0] = "par";
} else {
    array[0] = "impar"
}
if (numero >= 0) {
    array[1] = "positivo"
} else{
    array[1] = "negativo"
}

console.log(`O numero é ${array[0]} e ${array[1]}`);
