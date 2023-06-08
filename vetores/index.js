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
