import { get_positivo_number, print } from '../functions/io_utils.js';

function main(){
  print('   Descobrir classificação de um triangulo a partir dos angulos   ')
  const angulo1 = get_positivo_number('Angulo 1: ')
  const angulo2 = get_positivo_number('Angulo 2: ')
  const angulo3 = get_positivo_number('Angulo 3: ')

  if(eh_triangulo(angulo1, angulo2, angulo3)){
    print('Formam SIM um triângulo!')
    const classificacao = classificar_triangulo(angulo1, angulo2, angulo3)
    print(`E ele é um Triângulo ${classificacao}`)
  }else{
    print('NÃO formam triângulo!')
  }

}

function eh_triangulo(angulo1, angulo2, angulo3){
  return angulo1 + angulo2 + angulo3 === 180
}

function classificar_triangulo(angulo1, angulo2, angulo3){
  if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
    return 'ACUTÂNGULO'
  }else if (angulo1 === 90 || angulo2 === 90 || angulo3 === 90){
    return 'RETÂNGULO'
  }else{
    return 'OBTUSÂNGULO'
  }
}

main()