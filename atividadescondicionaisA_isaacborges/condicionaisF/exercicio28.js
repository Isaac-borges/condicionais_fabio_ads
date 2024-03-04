import { get_number, print } from '../functions/io_utils.js';

/* Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de
*  um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área
*  não pode ser negativo.
*/

function main(){
    print('   Calcular area do retangulo a partir de dois pontos no   ')
    print('                       plano cartesiano                    ')
    const xprimeiro = get_number('Digite o valor de X do primeiro ponto: ')
    const yprimeiro = get_number('Digite o valor de Y do primeiro ponto: ')
    const xsegundo = get_number('Digite o valor de X do segundo ponto-: ')
    const ysegundo = get_number('Digite o valor de Y do segundo ponto-: ')

    const area = calcular_area(xprimeiro, yprimeiro, xsegundo, ysegundo)

    print(`O retangulo formado pelos dois pontos que você indicou...`)
    print(`               >>> é igual à ${area} <<<                 `)
}

function calcular_area(x1, y1, x2, y2){
    const distanciax = Math.abs(x2-x1) 
    const distanciay = Math.abs(y2-y1)

    return distanciax * distanciay
}

main()
