import { get_positivo_number, print } from "../functions/io_utils.js";

function main(){
    print('-~-------------------------------~-')
    print('   Conferir se um número é primo   ')
    const numero1 = get_positivo_number('Insira um número: ')
    const primonumero = eh_primo(numero1)

    print(`${primonumero}`)

}

function eh_primo(num){
    if ( num === 2 ){
        return `O número ${num} é primo!`
    }
    else if ((num === 1 ) || (num % 2 === 0) || (num % 3 === 0) || (num % 5 === 0) || (num % 7 === 0 )){
        return `O número ${num} NAO é primo!`
    } else {
        return `O número ${num} é primo!`
    }
}

main()