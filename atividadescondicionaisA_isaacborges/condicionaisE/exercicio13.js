import { get_number, print } from '../functions/io_utils.js';

/*Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são
* diferentes.
*/

function main(){
    print('   Conferir qual número é o maior   ')
    const numero1 = get_number('Insira o primeiro número: ')
    const numero2 = get_number('Insira o segundo número: ')
    const numero3 = get_number('Insira o terceiro número: ')
    const numero4 = get_number('Insira o quarto número: ')
    const numero5 = get_number('Insira o quinto número: ')

    const maioremenor = conferir_maiormenor(numero1, numero2, numero3, numero4, numero5)

    print(`${maioremenor}`)
}

function conferir_maiormenor (n1, n2, n3, n4, n5){
    const maior = Math.max(n1, n2, n3, n4, n5)
    const menor = Math.min(n1, n2, n3, n4, n5)

    return `O número ${maior} é o maior e o número ${menor} é o menor!`
}

main()