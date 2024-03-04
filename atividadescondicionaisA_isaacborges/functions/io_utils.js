import { question } from "readline-sync";

export function get_number(mensagem){
  return Number(question(mensagem))
}

export function get_positivo_number(mensagem){
  const numero = get_number(mensagem)

  if (numero <= 0){
    print('Valor inválido!')
    return get_positivo_number(mensagem)
  }

  return numero
}

export function print(mensagem){
  console.log(mensagem)
}