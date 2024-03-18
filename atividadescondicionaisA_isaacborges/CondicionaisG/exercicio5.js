import { get_positivo_number } from "../functions/io_utils.js";

/* Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é
*  sempre pelo mais barato.
*/

//Inicio 
function main() {
    console.log('   Qual produto deve ser comprado?   ')
    const produto1 = get_positivo_number('Preço do produto 1: ')
    const produto2 = get_positivo_number('Preço do produto 2: ')
    const produto3 = get_positivo_number('Preço do produto 3: ')

    const produtocomprado = conferir_menor_preco(produto1, produto2, produto3)

    console.log(`O produto a ser comprado é o ${produtocomprado}!`)
}
//Processamento
function conferir_menor_preco(n1, n2, n3){
    const menorpreco = Math.min(n1, n2, n3)
    if (menorpreco === n1){
        return 'Produto 1'
    } else if (menorpreco === n2){
        return 'Produto 2'
    } else {
        return 'Produto 3'
    }
}

//Final
main()