import { get_number_in_range, get_positivo_number, print } from '../functions/io_utils.js'

/* 16. O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
*          |Até 5 Kg       |Acima de 5 Kg
*  File    |R$ 4,90 por Kg |R$ 5,80 por Kg
*  Alcatra |R$ 5,90 por Kg |R$ 6,80 por Kg
*  Picanha |R$ 6,90 por Kg |R$ 7,80 por Kg
*  Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção,
*  porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o
*  cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um programa que peça o tipo
*  e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da
*  compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.
*/

function main(){
    print('   Compra de carne   ')
    print('(1 - Filé, 2 - Alcatra, 3 - Picanha)')
    const tipocarne = get_number_in_range('Qual carne você vai comprar?: ', 1, 3)
    const carnekg = get_positivo_number('Quantos kg: ')
    const cartao = get_number_in_range('Vai usar cartão? (0 - Não, 1- Sim): ', 0, 1)

    const precocarne = calcular_preco(carnekg, tipocarne)
    let desconto = precocarne
    let precoapagar = 0

    let pagamento = ''
    if (cartao === 1){
        const descontado = precocarne - (precocarne * 0.95)
        desconto = `Foi descontado R$${descontado.toFixed(2)}`
        pagamento = 'Cartão Tabajara'

        precoapagar = precocarne - descontado
    } else {
        desconto = 'Não aplicado!'
        pagamento = 'Dinheiro'

        precoapagar = precocarne
    }

    let carne = ''
    
    if (tipocarne === 1){
        carne = 'Filé'
    } else if (tipocarne === 2){
        carne = 'Alcatra'
    } else if (tipocarne === 3){
        carne = 'Picanha'
    }

    const cupomfiscal = `
    ----------------------------------------
    COMPRA REALIZADA !
    
    CARNE COMPRADA    : ${carne}.
    PESO              : ${carnekg} kg
    
    PREÇO TOTAL       : R$${precocarne.toFixed(2)}

    FORMA DE PAGAMENTO: ${pagamento}!
    DESCONTO          : ${desconto}
    PREÇO A PAGAR     : R$${precoapagar.toFixed(2)}!
    
    ----------------------------------------
    `

    print(cupomfiscal)
}

function calcular_preco(kg, carne){
let precopromocional = 0

    if (carne === 1 ){
        if (kg < 5){
            precopromocional = 4.90

        } else {
            precopromocional = 5.80

        }
    } else if (carne === 2){
        if (kg < 5){
            precopromocional = 5.90

        } else {
            precopromocional = 6.80

        }
    } else if (carne === 3){
        if (kg < 5){
            precopromocional = 6.90

        } else {
            precopromocional = 7.80

        }
    }

    return precopromocional * kg
}

main()