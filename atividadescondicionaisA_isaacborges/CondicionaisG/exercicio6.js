import { question } from "readline-sync";

/* Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e
*  escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
*/

//Inicio
function main(){
    console.log('Insira seu turno (M -> Matutino; V -> Vespertino; N -> Noturno)')
    const entrada = question('Turno: ')
    const cumprimento = eh_turno(entrada)
    
    console.log(cumprimento)
}

//Processamento
function eh_turno(horario){
    if (horario === 'M'){
        return 'Bom dia!'

    } else if (horario === 'V') {
        return 'Boa tarde!'

    } else if (horario === 'N'){
        return 'Boa noite!'

    } else {
        return 'Valor Inválido!'
    }
}

//Final

main()