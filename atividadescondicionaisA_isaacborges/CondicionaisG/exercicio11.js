

/*  11. Leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do
*   número. Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplos:
*   o 326 = 3 centenas, 2 dezenas e 6 unidades
*   o 12 = 1 dezena e 2 unidades
*/

import { get_number_in_range, print } from "../functions/io_utils.js";

function main(){
    print('   Ordens que pertencem a um numero de 3 dígitos   ')
    const numero = get_number_in_range('Insira um número menor que 1000: ', 1, 999)
    
    const centena = obter_numero_ordem(numero, 'C')
    const dezena = obter_numero_ordem(numero, 'D')
    const unidade = obter_numero_ordem(numero, 'U')

    const cdu_formatado = formatar_cdu(centena, dezena, unidade)

    print(`${numero} = ${cdu_formatado} `)
}

function obter_numero_ordem(numero, ordem){
    if (ordem === 'C'){
        return Math.floor(numero/100)
    } else if (ordem === 'D'){
        const resto = numero % 100
        return Math.floor(resto/10)
    } else if (ordem === 'U'){
        const resto = numero % 100
        return resto % 10
    }
}

function formatar_cdu(C, D, U){
    let txt_centena = C > 1 ? 'centenas' : 'centena'
    let txt_dezena = D > 1 ? 'dezenas' : 'dezena'
    let txt_unidade = U > 1 ? 'unidades' : 'unidade'

    if (C === 0){ // não tem centena
        if (D === 0){ // não tem centena e dezena
            if (U > 0){
                return `${U} ${txt_unidade}`
            }
        } else { // tem dezena 
            if (U > 0){ // tem dezena e unidade
                return `${D} ${txt_dezena} e ${U} ${txt_unidade}`
            } else { // tem dezena e não tem unidade
                return `${D} ${txt_dezena}`
            }
        }
    } else { // tem centena
        if (D === 0){ // tem centena e não tem dezena
            if (U > 0){ // tem centena e unidade
                return `${C} ${txt_centena} e ${U} ${txt_unidade}`
            } else { // tem centena apenas
                return `${C} ${txt_centena}`
            }
        } else { // tem centena e dezena
            if (U > 0){ // tem centena, dezena e unidade
                return `${C} ${txt_centena}, ${D} ${txt_dezena} e ${U} ${txt_unidade}`
            } else { // centena e dezena
                return `${C} ${txt_centena} e ${D} ${txt_dezena}`
            }
        }
    }

    
}

main()