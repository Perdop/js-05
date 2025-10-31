const leia = require('readline-sync'); 

var a, b, c 

a = leia.questionInt("Insira o A: ");
b = leia.questionInt("Insira o B: ");
c = leia.questionInt("Insira o C: ");

if ((a + b) > c) {
  console.log("Maior que C");
} else if((a + b) < c){
  console.log("Menor que C");
} else{
  console.log("Igual a C");
}