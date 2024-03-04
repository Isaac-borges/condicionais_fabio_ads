import { get_positivo_number, print } from "../functions/io_utils.js";



function main(){
    print('-~------------------~-')
    print('   Calculo de idade   ')
    const diaatual = get_positivo_number('Insira o dia atual ------ : ') 
    const mesatual = get_positivo_number('Insira o mês atual ------ : ') 
    const anoatual = get_positivo_number('Insira o ano atual ------ : ') 
    const dianasc = get_positivo_number('Insira o dia de nascimento: ') 
    const mesnasc = get_positivo_number('Insira o mês de nascimento: ') 
    const anonasc = get_positivo_number('Insira o ano de nascimento: ') 

    const idade = calcular_idade(diaatual, mesatual, anoatual, dianasc, mesnasc, anonasc)

    print(`A idade, com os dados inseridos, é ${idade} anos!`)

}

function calcular_idade(dat, mat, aat, dnas, mnas, anas){
    let idade_calc = aat - anas

    if( mat < mnas || (mat === mnas && dat < dnas)){
        idade_calc--

    }

    return idade_calc
}

main()