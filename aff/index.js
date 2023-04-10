function calcular(){
   
    let anos = Number(document.getElementById("n1").value)
    
    
    let opcao = Number(document.getElementById("opcao").value)
   
    let expectativa, salario
    switch(opcao) {
        case 1: if(anos < 5){
            salario = 3000.00
            expectativa = "Alta"
        }else{
            salario = 6000.00
            expectativa = "Média"
        }
                break 
        case 2: if(anos < 5){
            salario = 5000.00
            expectativa = "Média"
        }else{
            salario = 8000.00
            expectativa = "Baixa"
        }
                break
        case 3: if(anos < 5){
            salario = 4000.00
            expectativa = "Alta"
        }else{
            salario = 7000.00
            expectativa = "Baixa"
        }
                break
        
        default: resultado = "Opção inválida"
    }
    
    document.getElementById("salario").innerHTML = salario
    document.getElementById("expectativa").innerHTML = expectativa
}
