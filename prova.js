let titulo = []; let descricao = []; let autor = []; let qtdlikes = []; let usuario; let index; let maior = 0; let menor = 10000000000000000000000000000; 
let indiceMenor; let indiceMaior;

for (let i = 0; i < 10; i++){

    titulo[i] = prompt(`Informe o ${i+1}º titulo`);
    descricao[i] = prompt(`Informe a ${i+1}º descricao`);
    usuario = prompt(`Informe o ${i+1}º autor`);

    while(autor.includes(usuario)){
        usuario = prompt(`Usuário já cadastrado, insira outro nome`);
    }
    autor[i] = usuario;

    qtdlikes[i] = prompt(`Informe a ${i+1}º quantidade de likes`);

    while(qtdlikes[i] < 0){
        qtdlikes[i] = prompt(`Quantidade de likes negativos, insira outra quantia`);
    }
    if(qtdlikes[i] > maior){
        maior = qtdlikes[i]
        indiceMaior = i
    }
    if(qtdlikes[i] < menor){
        menor = qtdlikes[i]
        indiceMenor = i
    }
    alert(titulo[i])
}
    alert('Agora você poderá fazer 5 mudanças');
for(let i = 0; i < 5; i++){
    usuario = prompt(`Entre o seu nome de usuário`)
    if(autor.includes(usuario)){
        index = autor.indexOf(usuario);
        
        qtdlikes[i] = prompt(`Mude a quantidade de likes de ${usuario}`);

        while(qtdlikes[index] < 0){
            qtdlikes[index] = prompt(`Quantidade de likes negativos, insira outra quantia`);
        }
        if(qtdlikes[index] > maior){
            maior = qtdlikes[index];
            indiceMaior = index;
        }
        if(qtdlikes[index] < menor){
            menor = qtdlikes[index];
            indiceMenor = index;
        }
    }
}

alert(`titulo e descrição dos posts com maior like: ${titulo[indiceMaior]} e ${descricao[indiceMaior]}`)
alert(`titulo e descrição dos posts com menor like: ${titulo[indiceMenor]} e ${descricao[indiceMenor]}`)


