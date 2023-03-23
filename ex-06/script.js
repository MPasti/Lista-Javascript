function Ex06(){
    //recuperar o peso e a idade da caixa de texto
    let salarioFx = Number(document.getElementById("fixo").value) //busca o valor digitado no elemento com o Id de peso
    //document representa toda a pagina html
    let vendas = Number(document.getElementById("vendas").value)
    
    let porc = vendas * (4/100)

    let salario = salarioFx + porc
    alert("Comissão: "+porc+"\nSalário total: "+salario)
}
