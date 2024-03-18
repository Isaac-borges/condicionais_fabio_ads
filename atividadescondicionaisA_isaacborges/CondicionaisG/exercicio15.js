import { get_positivo_number, print } from "../functions/io_utils.js";

/* 15. Uma fruteira está vendendo frutas com a seguinte tabela de preços:
*  ________| Até 5 Kg          | Acima de 5 Kg
*  Morango | R$ 2,50 por Kg    | R$ 2,20 por Kg
*  Maçã    | R$ 1,80 por Kg    | R$ 1,50 por Kg
*  Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
*  ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
*  morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
*/

function main(){
    print('   Fruteira ADS 2024.1   ')
    const macaskg = get_positivo_number('Quantos kg de maça você vai comprar?    : ')
    const morangokg = get_positivo_number('Quantos kg de morango você vai comprar? : ')
    
    const precomaca = calcular_preco(macaskg, 'MC')
    const precomorango = calcular_preco(morangokg, 'MR')
    let precototal = precomaca + precomorango 
    const pesototal = macaskg + morangokg

    if (pesototal > 8 || precototal > 25){
        precototal = precototal * 0.90
    }

    const interfacecompra = `
---------------------------
PESO MAÇAS   : ${macaskg} kg
PESO MORANGOS: ${morangokg} kg
PESO TOTAL   : ${pesototal} kg

PREÇO TOTAL  : R$${precototal.toFixed(2)}
---------------------------
    `

    print(interfacecompra)
    
}

function calcular_preco(frutakg, tipo){
    let precokg = 0

    if (tipo === 'MC'){
        if (frutakg <= 5 ){
            precokg = 1.80
             
        } else if (frutakg > 5){
            precokg = 1.50
            
        }
    } else if (tipo === 'MR'){
        if (frutakg <= 5 ){
            precokg = 2.50
             
        } else if (frutakg > 5){
            precokg = 2.20
            
        }
    }

    return precokg * frutakg
}

main()
