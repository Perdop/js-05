const leia = require('readline-sync')

var operacao, valor, saldo

saldo = 1000

operacao = leia.questionInt("Digite a operacao: (1 = Saldo | 2 = Saque | 3 = Deposito) ")
if (operacao >= 2) {
    valor = leia.questionFloat("Digite o valor: ")
} 

switch (operacao) {
    case 1:
        console.log(saldo);
        break;

    case 2:
        if (valor < saldo) {
            saldo = saldo - valor
            console.log(`Operacao concluida | Novo saldo: ${saldo}`);
        } else{
            console.log("Saldo Insuficiente");
        }
        break;

    case 3:
        saldo += valor
        console.log(`Novo saldo: ${saldo}`);
        break;

    default:
        console.log("operacao invalida");
        break;
}