import { get_number, print } from '../functions/io_utils.js';

/* Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
*  maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
*  contrario, é arredondado para o inteiro imediatamente inferior.
*/

function main(){
    print('   Arredondador de números decimais   ')
    const numerodecimal = get_number('Insira um número decimal (ex.: 0.35)-: ')

    const arredondado = arredondar_numero(numerodecimal)

    print(`O número inserido, arredondado, é ${arredondado}`)
}

function arredondar_numero(n1){
    return Math.round(n1)
}

main()

