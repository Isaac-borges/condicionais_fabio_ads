import { get_number, print } from "../functions/io_utils.js";

/*
* 2 Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.
*/

function main(){
    print('-------------------------------')
    const numero1 = get_number('Insira o primeiro número: ')
    const numero2 = get_number('Insira o segundo número: ')

    const numeros_ordenados = conferir_ordem(numero1, numero2)

    print(`Dos dois números escritos, ${numeros_ordenados}`)
    print('-------------------------------')
}

function conferir_ordem(numero1, numero2){
    if (numero1 > numero2){
        return `o MAIOR é ${numero1} e o MENOR é ${numero2}`
    } else {
        return `o MAIOR é ${numero2} e o MENOR é ${numero1}`
    } 
        
} 


main()

