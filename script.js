function Ex01(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let sub = n1 - n2  

    alert("A subtração de "+n1+" por "+n2+" é de "+sub)
}


function Ex02(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)

    let x = n1 + n2 + n3
    let x1 = n1 * n2 * n3 
    alert("A soma desses valores: " +  x +"\nA multiplicação desses valores: " + x1)
}

function Ex03(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let divisao = n1/n2

    alert("A divisão dos dois valores é de: " + divisao)
}
function Ex04(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let media = n1+n2/(2+3)
    alert("A média das provas são: " + media)
}
function Ex05(){
    let preco = Number(document.getElementById("preco").value)

    let desc = preco - (preco*0.1)

    alert("O preço com desconto de 10% é de: " + desc)
}

function Ex06(){
    //recuperar o peso e a idade da caixa de texto
    let salarioFx = Number(document.getElementById("fixo").value) //busca o valor digitado no elemento com o Id de peso
    //document representa toda a pagina html
    let vendas = Number(document.getElementById("vendas").value)
    
    let porc = vendas * (4/100)

    let salario = salarioFx + porc
    alert("Comissão: "+porc+"\nSalário total: "+salario)
}

function Ex07(){
    let peso = Number(document.getElementById("peso").value)

    let x = peso + (peso*15/100)

    alert("Você teria "+ x+"kg!")
}

function Ex07p2(){
    let peso = Number(document.getElementById("peso").value)

    let x = peso - (peso*20/100)

    alert("Você teria "+ x+"kg!")
}
function Ex08(){
    let peso = Number(document.getElementById("peso").value)

    let gramas = peso*1000
    alert("Seu peso em gramas é de: " + gramas + "g")
}

function Ex09(){
    let bm = Number(document.getElementById("bm").value)
    let bn = Number(document.getElementById("bn").value)
    let h = Number(document.getElementById("h").value)

    let a = ((bm + bn)*h)/2

    alert("A área do trapézio é de: " + a +"cm²")
}

function Ex10(){
    let lado = Number(document.getElementById("lado").value)

    let area = lado * lado

    alert("A área do quadrado é de: " + area +"cm²")
}