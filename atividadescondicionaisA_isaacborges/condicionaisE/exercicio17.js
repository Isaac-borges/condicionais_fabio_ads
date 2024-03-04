import { get_number, print } from '../functions/io_utils.js';

/*
* Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1
* escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor
* são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4
* divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação
* escreva o quadrado dos números lidos.
*/

function main(){
    print('   Dois valores, restos resultam em algo magico   ')
    const numero1 = get_number('Insira um número: ')
    const numero2 = get_number('Insira um número: ')

    const resultadomagico = calcular_resto(numero1, numero2)

    print(resultadomagico)
}

function calcular_resto(n1, n2){
    const resto = n1 % n2
    if (resto === 1){
        return n1 + n2 + resto

    } else if (resto === 2){
        if ( n1 % 2 === 0 && n2 % 2 === 0 ){
            return 'Os dois valores são pares!'
        } else if (n1 % 2 === 0 && n2 % 2 !== 0){
            return 'O primeiro valor é par, e o segundo, impar!'
        } else if (n1 % 2 !== 0 && n2 % 2 === 0){
            return 'O segundo valor é par, e o primeiro, impar!'
        } else {
            return 'Os dois valores são ímpares!'
        }
    } else if (resto === 3){
        return ((n1 + n2) * n1)

    } else if (resto === 4){
        return ((n1 + n2) / n2)

    } else {
        const quadradon1 = n1 ** 2
        const quadradon2 = n2 ** 2
        return `Os quadrados desses números são: ${quadradon1} e ${quadradon2} !`
    }
}

main()
