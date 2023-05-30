function exe1() {
    let conta = 1; let conta2 = 1
    let A, B, C, D, aux
    while (conta2 <= 5){
        A = Number(prompt('Informe A'))
        B = Number(prompt('Informe B'))
        C = Number(prompt('Informe C'))
        D = Number(prompt('Informe D'))
        let conta = 1
        while (conta <= 4){
            if (A>B) { aux = A; A = B; B = aux;}
            if (B>C) { aux = B; B = C; C = aux;}
            if (C>D) { aux = C; C = D; D = aux;}
            conta++
        }
        alert(`Crescente ${A}, ${B}, ${C} e ${D}`)
        alert(`Decrescente ${D}, ${C}, ${B} e ${A}`)
        conta2++
    }
}

function exe2(){
    let preco = 5
    let qtde = 120
    const despesa = 200
    let saida = "<table border ='1'> <tr> <th> Preço </th> <th > quantidade </th> <th> despesa </th> <th> lucro </th> </tr>"
    while(preco >= 1.0){
        let lucro = (preco * qtde) - despesa
        saida = saida + `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td> ${despesa} </td> <td>${lucro} </td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26
    }
    saida = saida + "</table>"
    document.getElementById("tabela").innerHTML = saida
}

function exe3() {
    let idade;
    let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
    let conta = 1 
    while (conta <=8) {
        idade = Number(prompt(`Informe a idade ${conta}`))
        if ((idade >= 0) && (idade <= 15)){
            f1++ 
        }
        else if ((idade >= 16) && (idade <= 30)){
            f2++
        }
        else if ((idade >= 31) && (idade <= 45)){
            f3++
        }
        else if ((idade >= 46) && (idade <= 60)){
            f4++
        }
        else if (idade > 60){
            f5++
        }
        conta++ 
    }
   
    alert(`Fx1: ${f1} Fx2: ${f2} Fx3: ${f3} Fx4: ${f4} Fx5: ${f5}`)
    alert(`% Fx1: ${f1/8*100} %Fx5: ${f5/8*100}`)
}

function exe4(){
    let tabu = Number(document.getElementById("tabu").value)
    let n = 1
    let saida = "<table border ='1'> <tr> <th> 1º valor </th> <th > 2º valor </th> <th> Resultado </th></tr>"
    while(n <= 10){
        let valor = tabu * n
        saida = saida + `<tr> <td> ${tabu} </td> <td> ${n} </td> <td> ${valor} </td> </tr>`
        n++
    }
    saida = saida + "</table>"
    document.getElementById("tabela").innerHTML = saida
}

function exe5() {
    let conta1 = 1
    while (conta1 <= 10){
        let conta2 = 0
        let saida = "" 
        while (conta2 <= 10){
            saida = saida + `\n ${conta1} x ${conta2} = ${conta1*conta2}` 
            conta2++
        }
        alert(saida)
        conta1 ++
    }
}

function exe6() {
    let codigo
    let valor; let totalVista = 0;
    let conta = 1; let totalPrazo = 0;
    while (conta <= 5){
        codigo = prompt('Informe P ou V').toUpperCase()
        valor = Number(prompt('Informe valor'))
        if (codigo == 'P'){
            totalPrazo += valor
        }
        else if (codigo == 'V'){
            totalVista += valor
        }
        else {
            alert('Código inválido, valor não será considerado')
            continue 
        }
        conta++
    }
    let total = totalVista + totalPrazo
    let valorParcela = totalPrazo / 3
    document.getElementById("result6").innerHTML = `Total à vista ${totalVista} Total à prazo ${totalPrazo} Total ${total} Primeira parcela ${valorParcela.toFixed(2)}`
}

function exe07(){
    let idade, altura, peso, qidade, media, v, ip, porc, p;
    for(i = 0; i >= 5; i++){
    idade = parseInt(prompt("Digite a idade: "));
    altura = parseInt(prompt("Digite a altura: "));
    peso = parseInt(prompt("Digite o peso: "));
    if(idade >= 50){
        qidade++;
    }
    if(idade >= 10 && idade <= 20){
        v++;
        ip += altura;  
    }
    if(peso <= 40){
        p++;
    }
    }
    media = ip/v
    porc = (p*100)/5
    console.log("Pessoas com idade superior a 50: ", qidade);
    console.log("Media da altura das pessoas entre 10 e 20 anos: ", media)
    console.log("Porcentagem de pessoas com peso inferior a 40kg: ", porc)
}

function exe08(){
    let idade, peso, altura, olhos, q, cabelo, a, midade, o, r;
    for(let i = 0; i >= 6; i++){
    idade = parseInt(prompt("Digite a idade: "));
    altura = parseInt(prompt("Digite a altura em cm: "));
    peso = parseInt(prompt("Digite o peso: "));
    olhos = prompt("Entre a cor do seu olho: ");
    cabelo = prompt("Entre a cor do seu cabelo: ");
        if(idade >= 50 && peso <= 60){
            q++;
            
        }
        if(altura <= 150){
            a++
            midade += idade
        }
        if(olhos == "A"){
            o++
        }
        if(cabelo == "R" && olhos != "A"){
            r++
        }
    }
    let media = midade/a
    let porc = (o*100)/6
    console.log("Pessoas com mais de 50 anos e menos de 60kg de peso: ", q);
    console.log("Media da idade das pessoas com menos de 1,50m: ", media);
    console.log("Porcentagem de pessoas com olhos azuis: ", porc);
    console.log("Quantidade de ruivos que não possuem olhos azuis: ", r)
}

function exe09(){
    let idade, altura, peso, q, a, midade;
    for(let i = 0; i >= 10; i++){
    idade = parseInt(prompt("Entre a idade: "))
    altura = parseInt(prompt("Digite a altura em cm: "));
    peso = parseInt(prompt("Digite o peso: "));
    
    midade += idade;
    if(peso >= 90 && altura <= 150){
        q++
    }
    if(idade >= 10 && idade <= 30 && altura >= 190){
        a++
    }
    }

    let porc = (a*100)/10
    let media = midade/10

    console.log("Media das 10 idades: ",  media);
    console.log("Pessoas com peso maior que 90 e altura menor que 1,50: ", q);
    console.log("Porcentagem de pessoas entre 10 e 30 com mais de 1,90: ", porc);

}
function exe10(){
    let n, par = 0, primo = 0, divs;
    for(let i = 1; i <= 10; i++){
    n = parseInt(prompt("Entre um número: "))
    if(n % 2 == 0){
        par += n
    }
    divs = 0;
    for(let z = 1; z <= n; z++){
        if(n % z == 0){
            divs++
        }
    }
    if(divs <= 2){
        primo += n;
    }
}
console.log(`Soma dos números pares: ${par}`);
console.log(`Soma dos números primos:  ${primo}`);
}


function exe20() {
    let opcao, n1, n2, n3, p1, p2, p3, media

    do {
        opcao = Number (prompt("Menu de opções. \n1. Média aritimetica \n2. Média ponderada \n3. Sair"))
        switch (opcao) {
            case 1: alert("Opção 1 escolhida.")
            n1 = Number (prompt("Entre com a nota 1: "))
            n2 = Number (prompt("Entre com a nota 2: "))
            n3 = Number (prompt("Entre com a nota 3: "))
            media = ((n1 + n2 + n3)/3)
            alert(`A média do aluno foi ${media}`); break

            case 2: alert("Opção 2 escolhida.")
            n1 = Number (prompt("Entre com a nota 1: "))
            p1 = Number (prompt("Entre com o peso da nota 1: "))
            n2 = Number (prompt("Entre com a nota 2: "))
            p2 = Number (prompt("Entre com o peso da nota 2: "))
            n3 = Number (prompt("Entre com a nota 3: "))
            p3 = Number (prompt("Entre com o peso da nota 3: "))
            media = (((n1 * p1) + (n2 * p2) + (n3 * p3))/(p1 + p2 + p3))
            alert(`A média do aluno foi ${media}`); break

            case 3: alert("Programa encerrado"); break

            default: alert("Opção inválida")
        }
    } while (opcao != 3)
}

function exe21(){
    let c1 = 0, c2 = 0, c3 = 0, c4 = 0, nulos = 0, brancos = 0;
    let total, opcao;
    do{
        opcao = Number(prompt('Escolha uma opção: \n 1. Cand 1 \n 2. Cand 2 \n 3. Cand 3 \n 4. Cand 4 \n 5. Nulo \n 6. Branco \n 0. Sair do programa'))
        switch(opcao){
            case 1: c1++; break
            case 2: c2++; break
            case 3: c3++; break
            case 4: c4++; break
            case 5: nulos++; break
            case 6: brancos++; break
            case 0: alert('Votação encerrada'); break
            default: alert('Opção inválida')
        }
    }
    while (opcao != 0)
    total = c1 + c2 + c3 + c4 + nulos + brancos
    if (total > 0){
        alert(`% de votos nulos ${nulos/total*100}`)
        alert(`% de votos brancos ${brancos/total*100}`)
    }
    else alert('Nenhum voto calculado')   
}

function exe23() {
    let salario, novo, ferias, dt, meses, opcao

    do {
        opcao = Number (prompt(`Escolha uma opção: \n1. Novo salário \n2. Férias \n3. Décimo Terceiro \n4. Sair`))
        switch (opcao){
            case 1: salario = Number (prompt(`Informe o salário.`))
            if ((salario >= 0) && (salario < 210)){
                novo = salario + salario*0.15
            }
            else if ((salario >= 210) && (salario <= 600)){
                novo = salario + salario*0.1
            }
            else if (salario > 600){
                novo = salario + salario*0.05
            }
            else{
                alert(`Salário negativo`); break
            }
            alert(`O novo salário será ${novo}`); break

            case 2: salario = Number (prompt(`Informe o salário.`))
            ferias = salario + salario*0.33
            alert(`Valor de férias: ${ferias}`)

            case 3: salario = Number (prompt(`Informe o salário.`))
                    meses = Number (prompt(`Informe os meses.`))
                    if ((meses >= 1) && (meses <= 12)) {
                        dt = salario + salario*meses/12
                        alert(`Décimo terceiro: ${dt}`)
                    }
                    else {
                        alert(`Nro de meses inválido`)
                    }
                    break
            case 4: alert(`Programa encerrado.`); break
            default: alert(`Opção inválida.`)
        }
    } while (opcao != 4)
}
