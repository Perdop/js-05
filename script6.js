const leia = require('readline-sync');

var cargo, reajuste

cargo = ["Gerente", "Vendedor", "Supervisor", "Motorista", "Estoquista", "Tecnico de TI"]
reajuste = [0.1, 0.7, 0.9, 0.6, 0.5, 0.8]


var nome, codigo, salario, novoSalario, selecionado

nome = leia.question("Digite o nome: ")
codigo = leia.questionInt("Digite o codigo: ")
salario = leia.questionFloat("Digite o salario: ")

switch (codigo) {
    case 1:
        selecionado = 0
        break;
    
    case 2:
        selecionado = 1
        break;

    case 3:
        selecionado = 2
        break;

    case 4:
        selecionado = 3
        break;

    case 5:
        selecionado = 4
        break;

    case 6:
        selecionado = 5
        break;

    default:
        console.log("codigo nao existe");
        break;
}

novoSalario = salario + (reajuste[selecionado] * salario)    

console.log(`Nome: ${nome}, Cargo: ${cargo[selecionado]}, Novo salario: ${novoSalario}`);
