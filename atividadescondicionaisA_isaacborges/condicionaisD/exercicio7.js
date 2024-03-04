import { get_positivo_number, print } from '../functions/io_utils.js';

/*
* 7. Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
* (três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
* formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
* escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).
*/

function main(){
    print('-~---------------------------------------------~-')
    print('   Classificação de triangulos de acordo com o   ')
    print('               tamanho dos lados                 ') 
    const lado1 = get_positivo_number('Insira um valor para o primeiro lado: ')
    const lado2 = get_positivo_number('Insira um valor para o segundo lado : ')
    const lado3 = get_positivo_number('Insira um valor para o terceiro lado: ')
    
    
    if (lado1 + lado2 >= lado3 && lado1 + lado3 >= lado2 && lado2 + lado3 >= lado1 ){
        print('-~---------------------------------------------~-')
        print(' ')
        print('      Formam SIM um triângulo!             ')
        const classificacao_triangulo = classificar_triangulo_lados(lado1, lado2, lado3)
        print(`>>> E ele é um triangulo ${classificacao_triangulo} <<<`)
        print(' ')
        print('-~---------------------------------------------~-')

    } else {
        print('-~---------------------------------------------~-')
        print(' ')
        print('              NÃO formam triângulo!')
        print(' ')
        print('-~---------------------------------------------~-')
    }


}

function classificar_triangulo_lados(l1, l2, l3){
    if (l1 === l2 && l1 ===l3){
        return 'EQUILÁTERO'
    } else if ( l1 === l2 || l1 === l3 || l2 === l3) {
        return 'ISÓSCELES'
    } else {
        return 'ESCALENO'
    }
}

main()