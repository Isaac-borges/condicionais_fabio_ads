import { print, get_number} from '../functions/io_utils.js';

/* Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o
*  coeficiente A deve ser diferente de 0 (zero).
*/

function main(){
    print('   Calculo das raizes de uma equação   ')
    print('           ax² + bx + c = 0            ')
    const coefa = get_number('Insira o coeficiente A: ')
    const coefb = get_number('Insira o coeficiente B: ')
    const coefc = get_number('Insira o coeficiente C: ')

    const resposta = calcular_raizes(coefa, coefb, coefc)
    print(resposta)
}

function calcular_raizes(a, b, c){
    let raiz1 = 0
    let raiz2 = 0
    let delta = 0
    let img1 = 0
    let img2 = 0
    let real = 0

    if (a === 0 || b === 0 || c === 0){
        return 'O COEFICIENTE DEVE SER DIFERENTE DE ZERO!'
    } else {
        delta = (b*b) - 4*a*c
        
        if (delta > 0){
            raiz1 = (-b + Math.sqrt(delta) )/(2*a);
            raiz2 = (-b - Math.sqrt(delta) )/(2*a);

            return `A raiz 1 é ${raiz1} e a raiz 2 é ${raiz2}`
        } else if (delta === 0 ) {
            raiz1 = (-b + Math.sqrt(delta) )/(2*a);
            raiz2 = (-b + Math.sqrt(delta) )/(2*a);

            return `As raizes são iguais à ${raiz1}`
        } else {
            real = (-b)/(2*a);
            img1  = Math.sqrt(-delta)/(2*a);
            img2  = - Math.sqrt(-delta)/(2*a);

            return `A raiz 1 é ${real}+${img1}i e a raiz 2 é ${real}+${img2}i`
        }

    }
}

main()