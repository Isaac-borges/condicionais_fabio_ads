import {get_positivo_number, print} from '../functions/io_utils.js';
import { percentual } from '../functions/math_utils.js';

/* Para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que
*  depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a
*  11% do salário bruto, mas não é descontado (é a empresa que deposita). O salário líquido corresponde
*  ao salário bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a
*  quantidade de horas trabalhadas no mês.
*  Desconto do IR:
*  o Salário Bruto até R$ 900,00 (inclusive) - isento
*  o Salário Bruto até R$ 1.500,00 (inclusive) - desconto de 5%
*  o Salário Bruto até R$ 2.500,00 (inclusive) - desconto de 10%
*  o Salário Bruto acima de R$ 2.500,00 - desconto de 20%
*  Escreva na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e
*  a quantidade de hora é 220.
*/

function main(){
    print('   Cálculo da folha de pagamento   ')
    const valor_hora = get_positivo_number('Qual o valor da hora?          : ')
    const horas = get_positivo_number('Quantas horas trabalhou no mês?: ')

    const salariobruto = valor_hora * horas
    const aliquota = calcular_aliquota_IR(salariobruto)
    const impostorenda = calcular_ir(salariobruto, aliquota)
    const fgts = calcular_fgts(salariobruto)
    const sindicato = calcular_sindicato(salariobruto)
    const inss = calcular_inss(salariobruto)
    

    const descontos = impostorenda + inss + sindicato

    const salarioliquido = salariobruto - descontos

    const folha = `
---------------------------------------
Salário Bruto      : R$ ${salariobruto.toFixed(2)}
(-) IR (${aliquota}%)      : R$ ${impostorenda.toFixed(2)}
(-) INSS ( 10%)    : R$ ${inss.toFixed(2)}
(-) Sindicato      : R$ ${sindicato.toFixed(2)}
FGTS (11%)         : R$ ${fgts.toFixed(2)}
Total de descontos : R$ ${descontos.toFixed(2)}
Salário Liquido    : R$ ${salarioliquido.toFixed(2)}
---------------------------------------
    
    `

    print(folha)
}

function calcular_aliquota_IR(salario){
    if (salario <= 900 ) {
        return 0
    } else if (salario <= 1500){
        return 5
    } else if (salario <= 2500){
        return 10
    } 

    return 20
}

function calcular_ir(salario, aliquota){
    return percentual(salario, aliquota)
}

function calcular_fgts(salario){
    return percentual(salario, 11)
}

function calcular_inss(salario){
    return percentual(salario, 10)
}

function calcular_sindicato(salario){
    return percentual(salario, 3)
}

main()