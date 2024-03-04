import { get_positivo_number, print } from '../functions/io_utils.js';

/*
*  Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
*  ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
*  final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
*  escreva “Reprovado”.
*  Escreva um algoritmo para ler um número e verificar se ele obedece a esta característica.
*/


function main(){
    print('   Verifique se você foi aprovado ou não   ')
    const nota1 = get_positivo_number('Insira a nota da primeira prova(De 01 a 10): ')
    const nota2 = get_positivo_number('Insira a nota da segunda prova(De 01 a 10)-: ')
    const media = calcular_media(nota1, nota2)

    if (media >= 7){
        print(`Média: ${media}`)
        print('Aprovado!')
    } else if (media < 7 ){
        print(`Média: ${media}`)
        const notafinal = get_positivo_number('Por favor, insira a nota da prova final: ')
        const mediafinal = calcular_media_final(media, notafinal)

        if (mediafinal >= 5){
            print(`Média final: ${mediafinal}`)
            print('Aprovado!')
        } else if (mediafinal < 5){
            print (`Média: ${mediafinal}`)
            print('Reprovado!')
        }
    }

}

function calcular_media(n1, n2){
    return (n1 + n2) / 2 
}

function calcular_media_final(med1, nf){
    return (med1 + nf) / 2
}

main()