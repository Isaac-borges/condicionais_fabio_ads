import { get_positivo_number, print } from '../functions/io_utils.js';

/*
* Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.
*/

// Inicio
function main(){
    print('-~-----------------~-')
    print('   Verificar se a data é valida   ')
    const diadigitado = get_positivo_number('Digite um dia: ') 
    const mesdigitado = get_positivo_number('Digite um mês: ')
    const anodigitado = get_positivo_number('Digite um ano: ')

    const anobissexto = verificar_anobissexto(anodigitado)
    const fevereirotrue = verificar_fevereiro(anobissexto, mesdigitado, diadigitado)

    if (anobissexto && mesdigitado === 2){
        print(`${fevereirotrue}`)

    } else if (!anobissexto && mesdigitado === 2) {
        print(`${fevereirotrue}`)

    } else {
        const fevereirofalse = verificar_validade(diadigitado, mesdigitado)
        print(fevereirofalse)
    }
    

}

// Processamento

function verificar_anobissexto(ano){
    if ( ano % 4 === 0 || ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0){
        return true 
    } else {
        return false
    }
}

function verificar_fevereiro(anobissexto, mes, dia){
    if ( anobissexto === false && mes === 2 && dia >= 29 ){
        return 'Data inválida!'
    } else if (anobissexto === true && mes === 2 && dia > 29){
        return 'Data inválida!'
    } else {
        return 'Data válida!'
    }
}

function verificar_validade(dia, mes){

    if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
        if ( dia > 31 ){
                return 'Data inválida!'
            } else if ( dia <= 31 ) {
                return 'Data válida!'
            }
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11 ) {
            if ( dia > 30 ) {
            return 'Data inválida!'
            } else {
            return 'Data válida!'
            }
    } 
}

// Final
main()