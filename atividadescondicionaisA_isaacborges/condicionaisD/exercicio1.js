import { get_number, print } from "../functions/io_utils.js";

function main(){
    print('-~------------------------~-')
    const numero1 = get_number('Por favor, insira o primeiro número: ')
    const numero2 = get_number('Por favor, insira o segundo número: ')
    const numero3 = get_number('Por favor, insira o terceiro número: ')

    let numeros_iguais = conferir_igualdade(numero1, numero2, numero3)

    print('-~------------------------~-')
    print(` `)
    print(`Entre os números escritos, ${numeros_iguais}`)
    print(` `)
    print('-~------------------------~-')

}

function conferir_igualdade(n1, n2, n3){
    if (n1 === n2 && n1 === n3){
        return `TODOS são iguais!`
    } else if (n1 === n2 || n1 === n3 || n2 === n3){
        return `há DOIS números iguais!`
    } else{
        return `não há NENHUM número igual!`
    }
}

main()

