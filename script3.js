const leia = require('readline-sync'); 

var nome, idade, doou 

nome = leia.question("Insira o seu nome: ");
idade = leia.questionInt("Insira a sua idade: ");
doou = leia.question("Voce ja doou? (sim/nao) ", {
    trueValue: ["s", "sim"],
    falseValue: ["n", "nao"],
    limit: ["s", "sim", "n", "nao"]
});

if ((idade >= 18 && idade < 60) || (idade >= 60 && idade < 70 && doou === true)) {
    console.log("Pode doar");
    
} else {
   console.log("nao pode doar");
    
}

