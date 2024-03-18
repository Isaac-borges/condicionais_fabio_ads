import { question } from "readline-sync";

/* Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:
*  o "Aprovado", se a média alcançada for maior ou igual a sete;
*  o "Reprovado", se a média for menor do que sete;
*  o "Aprovado com Distinção", se a média for igual a dez.
*/

//Inicio 
function main(){
    console.log('   Conferir média do aluno   ')
    const nota1 = Number(question('Insira a nota 1: '))
    const nota2 = Number(question('Insira a nota 2: '))

    const media = calcular_nota(nota1, nota2)
    const condicao = conferir_nota(media)

    console.log(`A média do aluno é ${media}`)
    console.log(condicao)

}

//Processamento
function calcular_nota(n1, n2){
    return (n1 + n2) / 2
}

function conferir_nota(med){
    if (med === 10){
        return 'Aprovado com Distinção!'
    } else if ( med < 10 && med > 7){
        return 'Aprovado!'
    } else {
        return 'Reprovado!'
    }
}

//Final
main()