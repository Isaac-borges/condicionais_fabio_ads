import { get_number, print } from '../functions/io_utils.js';

/*
* Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
* uma mensagem de permissão de acesso ou não.
*/
 
function main (){
    print('   Site do banco, insira sua senha (1234, para fins de teste)   ')
    const senha = get_number('Insira a senha: ')

    const acesso = conferir_senha(senha)
    print(acesso)

}

function conferir_senha(password){
    if (password === 1234){
        return 'Acesso permitido!'
    } else {
        return 'Acesso negado! Tente novamente.'
    }
}

main()
