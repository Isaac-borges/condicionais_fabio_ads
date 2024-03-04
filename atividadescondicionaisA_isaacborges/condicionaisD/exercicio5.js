import { get_number, print } from '../functions/io_utils.js';

//


function main(){
    print('-~---------------------------------------------~-')
    print('   Verificar a ordem crescente de TRÊS números   ')
    const numero1 = get_number('Insira um número     : ')
    const numero2 = get_number('Insira outro número  : ')
    const numero3 = get_number('Insira mais um número: ')
    const ordem = verificar_ordem(numero1, numero2, numero3)
    
    

    print(`A ordem crescente dos números é ${ordem}`)
} 

function verificar_ordem(n1, n2, n3){
    let menor, meio, maior 
    if (n1 > n2 && n1 > n3){
        maior = n1
        if (n2 > n3){
            meio = n2
            menor = n3
            return `${menor}, ${meio}, ${maior}` 
        } else {
            meio = n3
            menor = n2 
            return `${menor}, ${meio}, ${maior}` 
        }
    } else if (n2 > n1  && n2 > n3){
        maior = n2
        if (n1 > n3) {
            meio = n1
            menor = n3
            return `${menor}, ${meio}, ${maior}`
        } else {
            meio = n3
            menor = n1
            return `${menor}, ${meio}, ${maior}`
        }
    } else {
        maior = n3
        if (n2 > n1) {
            meio = n2
            menor = n1
            return `${menor}, ${meio}, ${maior}` 
   
        } else {
            meio = n1
            menor = n2
            return `${menor}, ${meio}, ${maior}`
        }
    }

}



main()