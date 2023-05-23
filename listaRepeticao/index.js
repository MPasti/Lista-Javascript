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
function exe21(){
    let cand1 = 0, cand2 = 0, cand3 = 0, cand4 = 0, nulos = 0, brancos = 0;
    let total, opcao;
    do{
        opcao = Number(prompt('Escolha uma opção: \n 1. Cand 1 \n 2. Cand 2 \n 3. Cand 3 \n 4. Cand 4 \n 5. Nulo \n 6. Branco \n 0. Sair do programa'))
        switch(opcao){
            case 1: cand1++; break
            case 2: cand2++; break
            case 3: cand3++; break
            case 4: cand4++; break
            case 5: nulos++; break
            case 6: brancos++; break
            case 0: alert('VOtação encerrada'); break
            default: alert('Opção inválida')
        }
    }
    while (opcao != 0)
    total = cand1 + cand2 + cand3 + cand4 + nulos + brancos
    if (total > 0){
        alert(`% de votos nulos ${nulos/total*100}`)
        alert(`% de votos brancos ${brancos/total*100}`)
    }
    else alert('Nenhum voto computado')   
}

function exe23(){
    let salario, novo, ferias, decimoTerceiro, meses, opcao
    do{
        opcao = Number(prompt("Escolha uma opcao: \n 1. Novo salario \n 2. Ferias \n 3. Decimo terceiro \n 4. Sair"))
    
    switch(opcao){
        case 1: salario = Number(prompt("Informe o salario"))
                if((salario >=0) && (salario < 210)){
                    novo = salario + salario*15/100
                }
                else if ((salario >= 210) && (salario<=600)){
                    novo = salario + salario*10/100
                }
                else if(salario > 600){
                    novo = salario + salario*5/100
                }
                else{
                    alert("Salario negativo"); break
                }
                alert (`Novo salario ${novo}`); break 
                
        case 2:
        }
    }
}
