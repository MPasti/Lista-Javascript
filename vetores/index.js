function exe01(){
    let vet = []

    for(let i =0; i<6; i++){
        vet[i] = Number(prompt(`Informe o ${i+1} o elemento`))
    }

    let pares = []; let impares =[];
    let iPares = 0; let iImpares = 0;
    for (let i=0;i<6;i++){
        if(vet[i]%2 ==0){
            pares[iPares] = vet[i]
            iPares++
        }
        else{
            impares[iImpares] = vet[i]
            iImpares++
        }
    }
    console.log(`Valores pares: ${pares} e a quantidade é ${pares.length}`)
    console.log(`Valores impares ${impares} e a quantidade é ${impares.length}`)
}
function exe02(){
    let vet = []; let mult2 = []; let mult3 = []; let mult23 = [];
    for(let i =0; i<7;i++){
        vet[i] = Number(prompt(`Informe o elemento`))
    }
    for(let i=0;i<7;i++){
        if((vet[i]%2 == 0) && (vet[i] % 3==0)){
            mult2.push(vet[i]); mult3.push(vet[i]);
            mult23.push(vet[i])
        }
        else if (vet[i] % 2 == 0){
            mult2.push(vet[i])
        }
        else if (vet[i] % 3 == 0){
            mult3.push(vet[i])
        }
    }
    console.log(`Multiplos de 2 e 3 ${mult23} | quantidade de ${mult23.length}`)
    console.log(`Multiplos de 2 ${mult2} | quantidade de ${mult2.length}`)
    console.log(`Multiplos de 3 ${mult3} | quantidade de ${mult3.length}`)
}

function extra(){
    let achou = false
    let vetor = []
    for(let i=0; i<4; i++){
        vetor[i] = i;
        if (vetor[i] == 3){
            achou = true
            console.log(`Elemento 3 foi encontrado`)
        }
    }  
    if (!achou){  
        console.log(`Elemento não encontrado`)  
    }
}

function exe03(){
    let cod = []
    let est = []
    let achou = false

    for(let i = 0; i < 5; i++){
        cod[i] = Number(prompt(`Informe o código do produto ${i + 1}: `))
        est[i] = Number(prompt(`Informe o estoque do produto ${i + 1}: `))
    }
    let cliente = Number(prompt('Informe o código do cliente'))
    while(cliente != 0){
    let codigo = Number(prompt('Qual o código do produto pra comprar'))
    let qtd = Number(prompt('Qual a quantidade do produto no estoque'))

    for(let i = 0; i < 5; i++){
        if(codigo == cod[i]){
            achou = true
            if(est[i] >= qtd){
            est[i] = est[i] - qtd
            }
            else {
                console.log('Estoque insuficiente')
            }
        }
    }
    if(!achou){
        console.log('Produto não existe')
    }
    }
    console.log(est)
}

function exe4(){
    let vetor = []; 
    posicao = [];

    for(let i = 0; i < 3; i++){
        vetor[i] = Number(prompt(`Entre com um número`))
    }
    for(let i = 0; i < 15; i++){
        if(vetor[i].includes(30)){
            posicao.push(i)
        }
    }
    console.log(`Posições em que o 30 aparece: ${posicao}`)
}

function exe05(){
    let logica = []
    let linguagem = []
    for(let i=0;i<10;i++){
        logica[i] = Number(prompt(`Informe o aluno que faz lógica`))
    }
    for(let i=0; i<10; i++){
        linguagem[i] = Number(prompt(`Informe o aluno que faz linguagem`))
    }
    //verifica alunos que fazem disciplinas em comum
    let comum =[]
    for(let i=0;i<10;i++){ // para cada aluno que faz Lógica
        // verifica se está em Linguagem também
        if(linguagem.includes(logica[i])){
            comum.push(logica[i]) //adiciona o vetor comum
        }
    }
    // vetor.indexOf('valor armazenado')
    console.log(`Alunos que fazem ambas ${comum}`)
}

function exe06(){
    let nomes = []
    let salarios = []
    for(let i = 0; i<10; i++){
        nomes[i] = prompt(`Informe nome`)
        salarios[i] = Number(prompt(`Informe o salário`))
    }
    //calcula maior e menor salário
    let maior = salarios[0]
    let menor = salarios[0]
    for(let i=0;i<10;i++){
       if(salarios[i] > maior){
        maior = salarios[i]
       }
       if(salarios[i] < menor){
        menor = salarios[í]
       }
    }
    let nomeMaior = nomes[salarios.indexOf(maior)]
    let nomeMenor = nomes[salarios.indexOf(menor)]
    console.log(`${nomeMaior} vai receber o maior salário ${maior}`)
    console.log(`${nomeMenor} vai receber o menor salário ${menor}`)
    
}
function exeSala(){
    //Crie um código que lê 5 codigos e nomes de alunos diferentes, mas não recebe códigos repetidos
    let codigo = [];
    let nome = [];
    for(let i = 0; i < 4; i++){
        codigo[i] = Number(prompt(`Entre o código do ${i+1} aluno`));
        let input = Number(prompt(`Insira o código do aluno`));

        while(codigo.includes(input)){
            input = Number(prompt(`Código já presente, insira outro`));
        }
        codigo[i] = input;
        nome[i] = prompt(`Entre o código do aluno`);
    }
}

function exe07(){
    let nros = []; 
    let i;
    let neg = 0; 
    let pos = 0;

    for(i = 0; i < 10; i++){
        nros[i] = Number(prompt('Informe um número (positivo ou negativo).'))
        if(nros[i] < 0){
            neg++
        }
        if(nros[i] >= 0){
            pos += nros[i] // += mesma coisa q pos = pos + nros[i]
        }
    }
    console.log(`Quantidade de nros negativos: ${neg}\nSoma dos nros positivos: ${pos}`)
}

function exe08(){
    let nome = []; let media = []; let i; let maior; let nmaiornota; let aprov

    for(i = 0; i < 7; i++){
        nome[i] = prompt('Informe o nome do aluno:')
        media[i] = Number(prompt('Informe a média final do aluno:'))
        if(media[i] > maior){
            maior.pull(media[i])
            nmaiornota.pull(nome[i])
        }
        if(media[i] < 7){
            aprov = (media[i]/4) + 2.5
            console.log(`O aluno precisa tirar pelo menos ${aprov} no exame final para ser aprovado.`)
        }
    }
    console.log(`O aluno com a maior média teve nota ${media[1]} e foi o ${nome[1]}`)
}

function exe09(){
 let nome = []; 
 let cod = []; 
 let prc = []; 
 let i; 
 let np = [];

    for(i = 0; i < 10; i++){
        nome[i] = prompt('Insira o nome do produto.')
        cod[i] = Number(prompt('Insira o código do produto.'))
        prc[i] = Number(prompt('Insira o preço do produto.'))
        if((cod[i] % 2 == 0) && (prc[i] > 1000)){
            np[i] = prc[i] * 1.2
        }
        else if(cod[i] % 2 == 0){
            np[i] = prc[i] * 1.15
        }
        else if(prc[i] > 1000){
            np[i] = prc[i] * 1.1
        }
        else{
            np[i] = "Não mudou."
        }  
    }
    for(i = 0; i < 10; i++){
        console.log(`Nome do produto: ${nome[i]}\nCódigo do produto: ${cod[i]}\nPreço do produto: ${prc[i]}\nNovo preço do produto: ${novoprc[i]}`)
    } 
}
