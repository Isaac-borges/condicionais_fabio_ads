import { get_number, print } from '../functions/io_utils.js';

// Leia 1 (um) número inteiro e escreva se este número é par ou impar.

function main(){
    print('   O número é ímpar ou par?   ')
    const numerointeiro = get_number('Insira um número inteiro: ')
    const imparoupar = conferir_impar_par(numerointeiro)
    
    print(`${imparoupar}`)

}

function conferir_impar_par(num1){
    if ( num1 % 2 === 0 ){
        return 'O número é par!'
    } else {
        return 'O número é ímpar!'
    }
}

main()