import { get_number, print } from "../functions/io_utils.js";

/*
* Leia 3 (três) números, verifique e escreva o maior entre os números lidos.
*/

function main(){
    print('-~-----------------------------------------------------~-')
    print('   Vamos verificar qual número é o maior dentre os que   ')
    print('                    você escreveu.                       ')
    const numero1 = get_number('Por favor, insira o primeiro número: ')
    const numero2 = get_number('Por favor, insira o segundo número : ')
    const numero3 = get_number('Por favor, insira o terceiro número: ')
    const maior_numero = conferir_maiornumero(numero1, numero2, numero3)

    print('-~-----------------------------------------------------~-')
    print(' ')
    print(`O maior número entre os três escritos acima, é o número ${maior_numero}!`)
    print(' ')
    print('-~-----------------------------------------------------~-')
}

function conferir_maiornumero(numero1, numero2, numero3){
    if (numero1 > numero2 && numero1 > numero3){
        return `${numero1}`

    } else if (numero2 > numero1 && numero2 > numero3){
        return `${numero2}`
    
    } else {
        return `${numero3}`
    }

}

main()
