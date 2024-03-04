import { get_number, get_positivo_number, print } from '../functions/io_utils.js';

/* Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
*  Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
*  sobre os dois valores lidos.
*/

function main(){
    print('   Escolha qual operação realizar entre dois números   ')
    const numero1 = get_number('Insira o primeiro número: ')
    const numero2 = get_number('Insira o segundo número-: ')
    print('Valores das operações: 1 - Adição, 2 - Subtração, 3 - Multiplicação e 4 - Divisão')
    const operacao = get_positivo_number('Qual operação usar?-----: ')

    const resultado = operacao_dosvalores (operacao, numero1, numero2)
    print(resultado)
}

function operacao_dosvalores (opc, n1, n2){
    if (opc === 1){
        const adicao = n1 + n2
        return `A adição dos números é ${adicao} !`
    } else if (opc === 2){
        const subtracao = n1 - n2
        return `A subtração dos números é ${subtracao} !`
    } else if (opc === 3){
        const multiplicacao = n1 * n2
        return `A multiplicação dos números é ${multiplicacao} !`
    } else if (opc === 4){
        const divisao = n1 / n2
        return `A divisão dos números é ${divisao} !`
    } else {
        return 'Insira um número válido de 1 a 4 !'
    }
}

main() 