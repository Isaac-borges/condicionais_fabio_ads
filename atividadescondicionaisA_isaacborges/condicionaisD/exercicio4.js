import { get_number, print } from '../functions/io_utils.js';

function main(){
    print ('-~--------------------------------------~-')
    print ('   Conferir se UNIDADE é igual à DEZENA   ')
    let numero1 = get_number('Insira um número de DOIS dígitos: ')
    
    const igualdadeUD = conferir_igualdadeUD(numero1)

    if (numero1 > 99){
        conferir_digitos(numero1)
    } else {
        print('-~--------------------------------------~-')
        print(' ')
        print(`${igualdadeUD}`)
        print(' ')
        print('-~--------------------------------------~-')
        
    }
    

}

function conferir_digitos(numero1){
    if (numero1 > 99){
        print (' ')
        print (' ')
        print (' Esse número tem mais de DOIS dígitos!')
        print (' ')
        print (' ')
        return main()
    }  

}

function conferir_igualdadeUD(n1) { 
    if ((Math.floor(n1/10) === n1 % 10)){
        return 'A dezena desse número é igual à unidade'
    } else {
        return 'A dezena desse número é diferente da unidade'
    }
    
}




main()