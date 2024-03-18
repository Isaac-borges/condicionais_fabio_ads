import { question } from "readline-sync";

//Leia um número e escreva se o número é inteiro ou decimal.

//Inicio
function main(){
    console.log('   Conferir se numero é inteiro ou decimal   ')
    const numero = Number(question('Insira o número: '))

    const intoudec = conferir_inteiro(numero)

    console.log(`O número que você inseriu é ${intoudec}`)
}

//Processamento
function conferir_inteiro(num){
    if (num === Math.round(num)){
        return 'Inteiro!'
    } else {
        return 'Decimal!'
    }
}

//Final
main() 