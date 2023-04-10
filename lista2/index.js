function exe5(){
    // recuperar valores nro1 e nro2 do usuário
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    // recupera o valor da opção escolhida
    let opcao = Number(document.getElementById("opcao").value)
    // operar nos números de acordo com escolha do usuário
    let resultado
    switch(opcao) {
        case 1: resultado = (n1 + n2) / 2
                break // não entra nos cases abaixo
        case 2: if (n1 >= n2){
                    resultado = n1 - n2 // nro1 é maior
                }
                else {
                    resultado = n2 - n1 // nro2 é maior
                }
                break
        case 3: resultado = n1 * n2
                break
        case 4: if (n2 != 0){
                    resultado = n1 / n2
                }
                else {
                    resultado = "Divisão por zero"
                }
                break
        default: resultado = "Opção inválida"
    }
    // saída dos dados
    document.getElementById("resultado").innerHTML = resultado
}
