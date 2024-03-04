import { print, get_positivo_number } from '../functions/io_utils.js';

//Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.

function main(){
    print('   Ver quais lados são cateto e hipotenusa   ')
    let n1 = get_positivo_number("Digite o comprimento do lado 1 do triângulo: ")
    let n2 = get_positivo_number("Digite o comprimento do lado 2 do triângulo: ")
    let n3 = get_positivo_number("Digite o comprimento do lado 3 do triângulo: ")


     
    
    let menor, meio, maior 
    if (n1 > n2 && n1 > n3){
        maior = n1
        if (n2 > n3){
            meio = n2
            menor = n3
                 
            } else {
                meio = n3
                menor = n2 
                 
            }
        } else if (n2 > n1  && n2 > n3){
            maior = n2
            if (n1 > n3) {
                meio = n1
                menor = n3
                
            } else {
                meio = n3
                menor = n1
                
            }
        } else {
            maior = n3
            if (n2 > n1) {
                meio = n2
                menor = n1
                 
       
            } else {
                meio = n1
                menor = n2
                
            }
        }
    
    

    const confericao = conferir_catetos_hip(menor, meio, maior)

    print(confericao)
}



function conferir_catetos_hip(a, b, c){
    let cateto1 = 0
    let cateto2 = 0
    let hipotenusa = 0

    if (a + b > c) {
        
        cateto1 = a;
        cateto2 = b;
        hipotenusa = c;
        const msg = `
        Os lados ${a}, ${b} e ${c} formam um triângulo.
        Cateto 1: ${cateto1}
        Cateto 2: ${cateto2}
        Hipotenusa: ${hipotenusa}
        `
        return msg


    } else if ( a === b && b === c ) {
        return 'Os lados são iguais!'

    } else {
        return 'Os lados não formam triangulo!'
    }
}

main()