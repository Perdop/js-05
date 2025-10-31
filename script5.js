const leia = require('readline-sync');

var item = ["cachorro quente", "x-salada", "x-bacon", "bauru", "refrigerante", "suco de laranja"]
var valor = [10, 15, 18, 12, 8, 13]
var selecionado

var codigo = leia.questionInt("Insira o codigo: ")
var quantidade = leia.questionInt("Insira a quantidade: ")

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
        break;
}

var preco = valor[selecionado] * quantidade

console.log(`Produto: ${item[selecionado]} e Valor: ${preco} `);
