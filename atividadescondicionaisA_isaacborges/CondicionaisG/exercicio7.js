import { get_positivo_number, print } from "../functions/io_utils.js";

function main(){
    print('   Calcular aumento no salário   ')
    const salarioatual = get_positivo_number('Insira seu salário: ')
    
    const percentual = get_percentual(salarioatual)
    const aumento = get_aumento_salario(salarioatual, percentual)
    const salarionovo = salarioatual + aumento

    const percentualporcento = percentual * 100 

    const interfaceaumento = `
-~---------------------------------~-

· o salário antes do reajuste era    : R$${salarioatual.toFixed(2)}
· o percentual de aumento aplicado é : ${percentualporcento}%
· o valor do aumento é               : R$${aumento.toFixed(2)}
· o novo salário é                   : R$${salarionovo.toFixed(2)}

-~---------------------------------~-
    `
    
    print(interfaceaumento)
}

function get_percentual(s1){
    let percent = 0.20

    if (s1 >= 280 && s1 < 700){
        percent = 0.15
    } else if (s1 >= 700 && s1 < 1500){
        percent = 0.10
    } else if ( s1 >= 1500 ) {
        percent = 0.05
    }

    return percent
}

function get_aumento_salario(s1, percent){
    return s1*percent
}

main()