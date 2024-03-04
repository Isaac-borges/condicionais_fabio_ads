import { get_number, print } from '../functions/io_utils.js';

/*
* Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos
* o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo
* milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste
* terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
* 2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025.
*/

function main(){
    print('   Conferir se os números seguem a característica do enunciado   ')
    let entrada = get_number('Digite um número entre 1000 e 9999: ')

    let resultado = calculo(entrada)
    
    print(resultado)
    if (resultado === entrada){
        print('Seu número é igual ao resultado do cálculo!')
    } else {
        print('Seu número não é igual ao resultado do cálculo!')
    }

}

function calculo(number){
    const n1 = Math.floor(number/100)
    const n2 = number % 100
    const n3 = (n1 + n2) ** 2
    return n3
}

main()