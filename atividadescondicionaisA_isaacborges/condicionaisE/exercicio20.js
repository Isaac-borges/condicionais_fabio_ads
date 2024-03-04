import { get_number, print } from '../functions/io_utils.js';

/* Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
* quarto) em que o ângulo se localiza.
*/

function main(){
    print('   Ler um angulo e verificar em qual quadrante ele está   ')
    const angulo = get_number('Insira um ângulo entre 0 e 360°: ')
    
    const quadrante = verificar_quadrante(angulo)
    print(quadrante)
}

function verificar_quadrante(ang){
    if (ang < 90 && ang > 0 ) {
        return `O angulo ${ang}° pertence ao PRIMEIRO QUADRANTE!`
    } else if ( ang < 180 && ang > 90){
        return `O angulo ${ang}° pertence ao SEGUNDO QUADRANTE!`
    } else if ( ang < 270 && ang > 180){
        return `O angulo ${ang}° pertence ao TERCEIRO QUADRANTE!`
    } else if ( ang < 360 && ang > 270){
        return `O angulo ${ang}° pertence ao QUARTO QUADRANTE!`
    } else if ( ang === 0 || ang === 90 || ang === 180 || ang === 270 || ang === 360 ){
        return `O angulo ${ang}° é delimitação de quadrante, portanto não pertence à NENHUM!`
    } else {
        return `Esse angulo não pertence ao intervalo entre 0 e 360!`
    }
}

main()