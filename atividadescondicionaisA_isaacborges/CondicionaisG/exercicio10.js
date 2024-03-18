import { get_number_in_range, print } from '../functions/io_utils.js'

/* Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a
*  sua média. A atribuição de conceitos obedece à tabela abaixo:
*  O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem
*  “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.
*/

function main(){
    print('   Aprovado ou não aprovado   ')
    const nota1 = get_number_in_range('Insira a primeira nota: ', 0, 10)
    const nota2 = get_number_in_range('Insira a segunda nota : ', 0, 10)

    const media = get_media(nota1, nota2)
    const conceito = get_conceito(media)
    const situacao = get_situacao(conceito)
    
    const interfaceaprovacao = `
-~-----------------------------------------~-
NOTA PROVA 1  : ${nota1.toFixed(2)}
NOTA PROVA 2  : ${nota2.toFixed(2)}
MÉDIA DO ALUNO: ${media.toFixed(2)}
CONCEITO      : ${conceito}

SITUAÇÃO      : ${situacao}
-~-----------------------------------------~-
    `

    print(interfaceaprovacao)
}

function get_media(n1, n2){
    return (n1 + n2) / 2
}

function get_conceito(med){
    if (med >= 9 && med <= 10){
        return 'A'
    } else if ( med < 9 && med >= 7.5){
        return 'B'
    } else if (med < 7.5 && med >= 6){
        return 'C'
    } else if (med < 6 && med >= 4){
        return 'D'
    } else {
        return 'E'
    }
}

function get_situacao(conceito){
    if (conceito === 'A' || conceito === 'B' || conceito === 'C'){
        return 'Aprovado'
    } else if (conceito === 'D' || conceito === 'E'){
        return 'Reprovado'
    }
}

main()