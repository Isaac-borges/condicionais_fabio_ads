import { get_positivo_number, print } from '../functions/io_utils.js';

/* 
* Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
* (IMC = peso / altura2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso 
* (IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).
*/

function main(){
    print('   Calcular e verificar o IMC (índice de massa corpórea)   ')
    const peso = get_positivo_number('Insira seu peso--: ')
    const altura = get_positivo_number('Insira sua altura: ')

    const imc = imc_calculo(peso, altura)
    
    const imcverificado = conferir_imc(imc)

    print(`O seu imc é ${imc.toFixed(2)}, seu IMC indica: ${imcverificado}!`)
}

function imc_calculo(kg, metros){
    return kg / (metros**2)
}

function conferir_imc(imc){
    if (imc < 25){
        return 'NORMAL'
    } else if (imc >= 25 && imc < 30){
        return 'OBESO'
    } else {
        return 'OBESIDADE MÓRBIDA'
    }
}

main()