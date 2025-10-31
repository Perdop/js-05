const leia = require('readline-sync')

var numero1, numero2, operacao, resultado

numero1 = leia.questionFloat("Digite o 1 numero: ")
numero2 = leia.questionFloat("Digite o 2 numero: ")
operacao = leia.questionInt("Digite o numero da operacao: (1 = + | 2 = - | 3 = / | 4 = * ")

switch (operacao) {
    case 1:
        resultado = numero1 + numero2;
        break;

    case 2:
        resultado = numero1 - numero2;
        break;

    case 3:
        resultado = numero1 / numero2;
        break;

    case 4:
        resultado = numero1 * numero2;
        break;
        
    default:
        "Fora do operacao valida"
        break;
}

console.log(resultado);
