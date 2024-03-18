import { get_entry, get_positivo_number, print } from "../functions/io_utils.js"

/* 14. Um posto está vendendo combustíveis com a seguinte tabela de descontos:
*  1. Álcool:
*  · até 20 litros, desconto de 3% por litro
*  · acima de 20 litros, desconto de 5% por litro
*  2. Gasolina:
*  · até 20 litros, desconto de 4% por litro
*  · acima de 20 litros, desconto de 6% por litro.
*  Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da
*  seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que
*  o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.
*/



function main(){
    print('   Descontos posto de gasolina   ')
    const combustivel = get_entry('Tipo de combustível (A-álcool, G-gasolina): ')
    const litros = get_positivo_number('Quantos litros de combustível?: ')

    const precopago = calc_combustivel(combustivel, litros)
    const interfacedesconto = `
----------------------------------------------------
Desconto aplicado!
O combustível que você escolheu é: ${combustivel}
E abasteceu                      : ${litros} litros

O preço com o desconto é         : ${precopago.toFixed(2)}
----------------------------------------------------
    `

    print(interfacedesconto)
}

function calc_combustivel(comb, lit){
    let precocombustivel = 0

    if (comb === 'A'){
        precocombustivel = 1.90
        if (lit <= 20) {
            return ((precocombustivel * 0.97) * lit)

        }  else if (lit > 20){
            return((precocombustivel * 0.95) * lit)

        }
    } else if (comb === 'G'){
        precocombustivel = 2.50
        if (lit <= 20) {
            return ((precocombustivel * 0.96) * lit)

        }  else if (lit > 20){
            return((precocombustivel * 0.94) * lit)

        }
    }
}

main()