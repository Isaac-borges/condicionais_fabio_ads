
import { get_entry, print } from "../functions/io_utils.js";

// Leia uma letra e verifique se a letra digitada é vogal ou consoante.

//Inicio
function main(){
    print('   Conferir se um caractere é vogal ou consoante   ')
    const letra = get_entry('Insira uma letra: ')

    const caractere = conferir_caractere(letra)
    print(`A letra que você inseriu é uma ${caractere} `)
}

//Processamento
function conferir_caractere(letra){
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        return 'vogal'
    } else if (letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U'){
        return 'vogal'
    } else {
        return 'consoante'
    }
     
}

//Final
main()