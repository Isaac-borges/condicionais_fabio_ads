import { print, get_positivo_number } from '../functions/io_utils.js'


/* Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu
*  nascimento e a data (dia, mês e ano) atual.
*/

function main(){
    print('-~------------------------------------~-')
    print('   Calculo de idade em dias, mês e ano  ')
    const diaatual = get_positivo_number('Insira o dia atual ------ : ') 
    const mesatual = get_positivo_number('Insira o mês atual ------ : ') 
    const anoatual = get_positivo_number('Insira o ano atual ------ : ') 
    const dianasc = get_positivo_number('Insira o dia de nascimento: ') 
    const mesnasc = get_positivo_number('Insira o mês de nascimento: ') 
    const anonasc = get_positivo_number('Insira o ano de nascimento: ') 

    const idade = calcular_idade(diaatual, mesatual, anoatual, dianasc, mesnasc, anonasc)
    const idadedm = idade_dma(dianasc, mesnasc, diaatual, mesatual, idade)
    

    print('-~------------------~-')
    print(' ')
    print(`A idade da pessoa indicada é >>> ${idadedm} <<<`)
    print(' ')
    print('-~------------------~-')

}

function calcular_idade(dat, mat, aat, dnas, mnas, anas){
    let idade_calc = aat - anas

    if( mat < mnas || (mat === mnas && dat < dnas)){
        idade_calc--

    }

    return idade_calc
}



function idade_dma(dnas, mnas, dat, mat, idadeanos){
    let idademeses = (idadeanos * 12) - 1

    if  (mat === mnas && dnas <= dat){ 
        ++idademeses
    }

    let idadedias = (idademeses * 30 * idadeanos) 
    
    if (mat === mnas && dnas <= dat ){
        idadedias = idadedias + ((dat + 30) - (dnas + 30))
    } else {
        idadedias = idadedias + ((dnas + 30) - (dat + 30))
    }

    return `${idadedias} dias, ${idademeses} meses e ${idadeanos} anos`


}

main()

