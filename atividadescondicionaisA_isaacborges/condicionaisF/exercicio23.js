import { get_positivo_number, print } from '../functions/io_utils.js';

/* Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais
* recente.
*/

function main(){
    print('   Conferir qual data é mais recente   ')
    let dia1 = get_positivo_number("Digite o dia da primeira data: ")
    let mes1 = get_positivo_number("Digite o mês da primeira data: ")
    let ano1 = get_positivo_number("Digite o ano da primeira data: ")
    let dia2 = get_positivo_number("Digite o dia da segunda data: ")
    let mes2 = get_positivo_number("Digite o mês da segunda data: ")
    let ano2 = get_positivo_number("Digite o ano da segunda data: ")

    const datarecente = conferir_recente(dia1, mes1, ano1, dia2, mes2, ano2)

    print(datarecente)

}

function conferir_recente(d1, m1, a1, d2, m2, a2){
    if (a1 > a2 || (a1 === a2 && m1 > m2) || (a1 === a2 && m1 === m2 && d1 > d2)) {
        return 'A primeira data é mais recente'

    } else if (a1 < a2 || (a1 === a2 && m1 < m2) || (a1 === a2 && m1 === m2 && d1 < d2)) {
        return 'A segunda data é mais recente.'

    } else {
        return 'As datas são iguais.'
    }
}

main()