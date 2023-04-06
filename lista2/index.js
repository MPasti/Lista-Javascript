function ex05(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let escolha = Number(document.getElementById("escolha").value)

    switch(escoha){

    case 1: resultado = (n1 + n2)/2
        break

    case 2: if(n1 >= n2){
            resultado = n1 - n2
        }else{
            resultado = n2 - n1
        }
        break 

    case 3: resultado = n1 *n2 
        break 

    case 4: if(n2 != 0){
            resulltado =n1/n2
        }else{
            resultado = "Não pode dividir por zero"
        }
        break

        default: resultado = "Opção inválida"
    }
    document.getElementById("resultado").innerHTML = resultado
}
