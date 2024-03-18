import { get_number, print } from '../functions/io_utils.js'

/* 9. Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro
*valor deve aparecer valor inválido.
*/ 

function main(){
    print('   Numero para dia da semana   ')
    const entrada = get_number('Insira um número: ')
    const dia = qual_diasemana(entrada)

    if (dia === 'Valor Inválido'){
        print(dia)
    } else {
        print(`O dia correspondente da semana é ${dia}`)
    }
}

function qual_diasemana(num){
    if (num === 1){
        return 'Domingo'
    } else if (num === 2){
        return 'Segunda'
    } else if (num === 3){
        return 'Terça'
    } else if (num === 4){
        return 'Quarta'
    } else if (num === 5){
        return 'Quinta'
    } else if (num === 6){
        return 'Sexta'
    } else if (num === 7){
        return 'Sábado'
    } else {
        return 'Valor Inválido'
    }
}

main()