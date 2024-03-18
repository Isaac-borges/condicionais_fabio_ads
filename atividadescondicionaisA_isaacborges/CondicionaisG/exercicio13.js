import {get_entry, print} from '../functions/io_utils.js'

/* 13. Faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
*   a) "Telefonou para a vítima ?"
*   b) "Esteve no local do crime ?"
*   c) "Mora perto da vítima ?"
*   d) "Devia para a vítima ?"
*   e) "Já trabalhou com a vítima ?"
*   O algoritmo deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa
*   responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como
*   "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
*/

function main(){
    print('   Solucionar um crime (responder com S ou N)   ')

    const pergunta1 = get_entry('Telefonou para a vítima ?   : ')
    const pergunta2 = get_entry('Esteve no local do crime ?  : ')
    const pergunta3 = get_entry('Mora perto da vítima ?      : ')
    const pergunta4 = get_entry('Devia para a vítima ?       : ')
    const pergunta5 = get_entry('Já trabalhou com a vítima ? : ')
    
    const veredito = get_veredito(pergunta1, pergunta2, pergunta3, pergunta4, pergunta5)


    print(`A pessoa investigada é ${veredito}!`)
}

function get_veredito(p1, p2, p3, p4, p5){
    let nivelsuspeito = 0
    if (p1 === 'S'){
        nivelsuspeito++
    } else {
        nivelsuspeito
    }
    if (p2 === 'S'){
        nivelsuspeito++
    } else {
        nivelsuspeito
    }
    if (p3 === 'S'){
        nivelsuspeito++
    } else {
        nivelsuspeito
    }
    if (p4 === 'S'){
        nivelsuspeito++
    } else {
        nivelsuspeito
    }
    if (p5 === 'S'){
        nivelsuspeito++
    } else {
        nivelsuspeito
    }
    
    let veredito = 'inocente'

    if (nivelsuspeito === 2){
        veredito = 'suspeita'
    } else if (nivelsuspeito === 3 || nivelsuspeito === 4){
        veredito = 'cúmplice'
    } else if (nivelsuspeito === 5){
        veredito = 'assassino'
    }
    
    return veredito
}
main()