import { get_number, print } from '../functions/io_utils.js';

/*
* Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.
*/

function main(){
    print('   Calcular média e quais números são maiores que ela   ')
    const numero1 = get_number('Insira o primeiro número: ')
    const numero2 = get_number('Insira o segundo número: ')
    const numero3 = get_number('Insira o terceiro número: ')
    const numero4 = get_number('Insira o quarto número: ')
    const numero5 = get_number('Insira o quinto número: ')

    const media = calcular_media(numero1, numero2, numero3, numero4, numero5)
    const maior_media = conferir_maiores_media(numero1, numero2, numero3, numero4, numero5, media)

    print(`A média é ${media}!`)
    print(`E os números maiores que a média são: ${maior_media} !`)
}

function calcular_media(n1, n2, n3, n4, n5){
    return (n1 + n2 + n3 + n4 + n5) / 5
}

function conferir_maiores_media(n1, n2, n3, n4, n5, med){
    if ( n1 > med && n2 > med && n3 > med && n4 > med && n5 > med ){
        return `${n1}, ${n2}, ${n3}, ${n4}, ${n5}`

    } else if (n1 > med && n2 > med && n3 > med && n4 > med) {
        return `${n1}, ${n2}, ${n3}, ${n4}`

    } else if (n1 > med && n2 > med && n3 > med){
        return `${n1}, ${n2}, ${n3}`

    } else if (n1 > med && n2 > med){
        return `${n1}, ${n2}`

    } else if (n1 > med && n3 > med){
        return `${n1}, ${n3}`

    } else if (n1 > med && n4 > med){
        return `${n1}, ${n4}`

    } else if (n1 > med && n5 > med){
        return `${n1}, ${n5}`

    } else if (n1 > med){
        return `${n1}`

    } else if (n2 > med && n3 > med && n4 > med && n5 > med) {
        return `${n2}, ${n3}, ${n4}, ${n5}`

    } else if (n2 > med && n3 > med && n4 > med) {
        return `${n2}, ${n3}, ${n4}`

    } else if (n2 > med && n3 > med) {
        return `${n2}, ${n3}`

    } else if (n2 > med && n4 > med) {
        return `${n2}, ${n4}`

    } else if (n2 > med && n5 > med) {
        return `${n2}, ${n5}`

    } else if (n2 > med) {
        return `${n2}`

    } else if (n3 > med && n4 > med && n5 > med) {
        return `${n3}, ${n4}, ${n5}`

    } else if (n3 > med && n4 > med) {
        return `${n3}, ${n4}`

    } else if (n3 > med && n5 > med) {
        return `${n3}, ${n5}`

    } else if (n3 > med) {
        return `${n3}`

    } else if (n4 > med && n5 > med) {
        return `${n4}, ${n5}`

    } else if (n4 > med) {
        return `${n4}`

    } else if (n5 > med) {
        return `${n5}`

    }
}

main()
