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
function exe03(){
    let codigos = []
    let estoque = []
    let achou = false
    for(let i=0;i<5;i++){
        codigos[i] = Number(prompt(`Informe o código do produto ${i+1}`))
        estoque[i] = Number(prompt(`Informe o estoque do produto ${i+1}`))
    }
    let ciente = Number(prompt(`Informe o código do cliente`))
    while(cliente != 0){
        let codigo = Number(prompt(`Qual o código do produto para comprar`))
        let qtde = Number(prompt(`Qual a qtde desejada para compra`))
    
        for(let i = 0; i<5; i++){
            if(codigo == codigo[i]){
                achou = true
                //produto encontrado
                estoque[i] = estoque[i] - qtde //atualiza o estoque
            }
            else{
                alert(`Estoque insuficiente`)
            }
        }
        if(!achou){
            alert(`Produto não existe`)
        }
    }
    alert(estoque)
}
