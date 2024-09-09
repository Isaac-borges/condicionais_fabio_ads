import {readFileSync, closeSync} from 'fs'
import { question } from 'readline-sync'
//Internet é uma rede de redes
function enter_to_continue(enter){
    const continuar = question(enter)
}

function print(message){
    console.log(message)
}

function get_number(message){
    const numero = Number(question(message))

    return numero
}

function has_no_e(palavra){

}

function menu_de_opcoes(){
    const menu = `
    ------------------------------------------------------
                             MENU
    1 - Palavras com mais de 20 letras
    2 - Palavras sem E

    ------------------------------------------------------
    >>> `

    return menu
}

function listar_palavras(palavras, titulo, total){
    
}

function buscar_por_tamanho_20_mais(linhas)(palavras){
    const lista = []
    for (let i = 0; i < palavras.length; i++){
        const palavra_atual = palavras[i]
        if (palavra_atual.length > 20){
            lista.push(palavra_atual)
        }
    }
}

function main(){
    
    const dados = readFileSync('words.txt', "utf-8")
    const linhas = dados.split("\n")

    let opcao = get_number(menu_de_opcoes())

    while(opcao != 0){
        if (opcao === 1){
            const palavras_20_mais = buscar_por_tamanho_20_mais(linhas)
            listar_palavras(palavras_20_mais, 'Palavras 20+', linhas.lenght)
        }    
    }
}

main()
