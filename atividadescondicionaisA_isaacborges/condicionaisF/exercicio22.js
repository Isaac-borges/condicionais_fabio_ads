import { get_number, print } from '../functions/io_utils.js';

/* Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
*  hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo
*  máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia
*  seguinte.
*/


function main(){
    print('   Calcular duração de um jogo   ')
    let horainicio = get_number('Que horas o jogo começou?-: ')
    let minutoinicio = get_number('Quantos minutos?----------: ')
    let horafinal = get_number('Que horas terminou?-------: ')
    let minutofinal = get_number('Quantos minutos?----------: ')

    const resultado = calcular_duracao(minutoinicio, horainicio, minutofinal, horafinal)


}

function calcular_duracao(min1, hr1, min2, hr2){
    let duracaoHoras = 0;
    let duracaoMinutos = 0;

    if (hr2 < hr1 || (hr2 === hr1 && min2 < min1)) {
        duracaoHoras = 24 - hr1 + hr2;
    } else {
        duracaoHoras = hr2 - hr1;
    }

    if (min2 < min1) {
        duracaoMinutos = 60 - min1 + min2;
        duracaoHoras--; 
    } else {
        duracaoMinutos = min2 - min1;
    }

    console.log(`A duração do jogo foi de ${duracaoHoras} horas e ${duracaoMinutos} minutos.`);
}

main()