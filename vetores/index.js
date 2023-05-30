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
