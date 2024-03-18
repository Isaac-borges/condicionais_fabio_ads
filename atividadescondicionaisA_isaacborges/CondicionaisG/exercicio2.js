import { question } from "readline-sync";

// Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido.

//Inicio
function main(){
    console.log('   Verificar sexo (Inserir F ou M)   ')
    const letra = question('Qual o sexo? --- : ')
    const generoindicado = eh_feminino_masculino(letra)
    console.log(`Entendo, o sexo indicado é: ${generoindicado}!`)
}

//Processamento
function eh_feminino_masculino(genero){
    if (genero === 'F'){
        return 'Feminino'
    } else if (genero === 'M') {
        return 'Masculino'
    } else {
        return 'Sexo Inválido'
    }
}

//Final
main()