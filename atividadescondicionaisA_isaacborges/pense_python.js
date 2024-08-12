import {readFileSync, closeSync} from 'fs'
import { question } from 'readline-sync'

function main(){
    
    const dados = readFileSync('words.txt', "utf-8")
    const linhas = dados.split("\n")

    let qnt_caracteres 
    let estado = 1 

    while(estado > 0)
        if (estado = 1){
            qnt_caracteres = Number(question("Numero de caracteres: "))
            console.clear()
            for (let linha of linhas){
                
                if (linha.length > qnt_caracteres){
                    console.log(linha)
                }
            }
            

            estado = Number(question("Continuar? "))
            
        }    
        
}

main()