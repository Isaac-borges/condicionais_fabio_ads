import { get_positivo_number, print } from '../functions/io_utils.js';

/* Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
*  valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
*  possíveis para a variável opção são 1, 2 e 3.
*/

//Inicio
function main(){
    const opcao = get_positivo_number('Insira a opção (1 a 3): ')
    const numero1 = get_positivo_number('Insira o primeiro número: ') 
    const numero2 = get_positivo_number('Insira o primeiro número: ')
    const numero3 = get_positivo_number('Insira o primeiro número: ')

    const opcaoprint = conferir_opcao(opcao, numero1, numero2, numero3)

    print(`${opcaoprint}`)
}

//Processamento
function conferir_opcao( opc, n1, n2, n3){
    if (opc === 1){
        return `${n1}`
    } else if (opc === 2){
        return `${n2}`
    } else if (opc === 3){
        return `${n3}`
    } else {
        return 'Opção inválida!'
    }

}

//Final
main()