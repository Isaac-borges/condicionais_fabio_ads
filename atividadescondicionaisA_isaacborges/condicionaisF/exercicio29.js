import { get_positivo_number, print } from "../functions/io_utils.js";

/* Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas
*  formadas pelos seus dois primeiros e dois últimos dígitos.
*  Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.
*  Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.
*/


function main(){
    print('   Verificar se um número é quadrado perfeito   ')
    let numerode4digitos = Numero4digitos('Por favor, insira um número de 4 dígitos: ')

    const quadradoperfeito = conferir_quadrado_perfeito(numerode4digitos)
    print(quadradoperfeito)

}

function conferir_quadrado_perfeito(numero){
    const raizquad = Math.sqrt(numero)
    const dezenasiniciais = Math.floor(numero / 100)
    const unidadesiniciais = numero % 100
    const somadezenas = dezenasiniciais + unidadesiniciais

    if (raizquad === somadezenas) {
        return `${numero} é um quadrado perfeito!`
    } else {
        return `${numero} não é um quadrado perfeito!`
    }
}


function Numero4digitos(mensagem) {
    const numero = get_positivo_number(mensagem)
    if (numero < 1000 || numero > 9999) {
        print("Por favor, insira um número de 4 dígitos.");
        return Numero4digitos(mensagem);
    }

    return numero
}

main()