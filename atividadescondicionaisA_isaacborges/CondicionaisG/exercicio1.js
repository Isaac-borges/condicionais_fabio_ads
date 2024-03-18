import { question } from "readline-sync";

// 1. Leia um número e mostre na tela se o número é positivo ou negativo.

//Inicio
function main(){
    console.log('   Conferir se um número é positivo ou negativo   ')
    const numero = Number(question('Insira um número: '))

    const eh_positivonegativo = conferir_neg_pos(numero)

    console.log(`O número inserido (${numero}) é ${eh_positivonegativo} !!`)

}

//Processamento
function conferir_neg_pos(num){
    return num > 0 ? 'positivo' : 'negativo'

}

// Final
main()
