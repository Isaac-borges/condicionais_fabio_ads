import { get_positivo_number, print } from '../functions/io_utils.js';

/* Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
*  Escreva na tela qual dos professores tem salário total maior.
*/

function main(){
    print('   Verificar salario total de dois professores e qual   ')
    print('                   tem salário maior                    ')
    const horasaulaprof1 = get_positivo_number('Quantas horas aula o primeiro professor ministrou?-: ')
    const valorhoraprof1 = get_positivo_number('Qual valor o primeiro professor recebeu por aula?--: ')
    const horasaulaprof2 = get_positivo_number('Quantas horas aula o primeiro professor ministrou?-: ')
    const valorhoraprof2 = get_positivo_number('Qual valor o segundo professor recebeu por aula?---: ')

    const salario_prof1 = salario_total(horasaulaprof1, valorhoraprof1)
    const salario_prof2 = salario_total(horasaulaprof2, valorhoraprof2)
    print(`O primeiro professor recebeu R$${salario_prof1.toFixed(2)}, e o segundo, R$${salario_prof2.toFixed(2)} !`)
    
    const salario_maior = conferir_maior_salario(salario_prof1, salario_prof2)

    print(salario_maior)

}

function salario_total(horaula, valoraula){
    return Math.floor(horaula) * valoraula
}

function conferir_maior_salario(salario1, salario2){
    if (salario1 > salario2){
        return `E o maior salário é R$${salario1.toFixed(2)} !`
    } else {
        return `E o maior salário é R$${salario2.toFixed(2)} !`
    }
}

main() 