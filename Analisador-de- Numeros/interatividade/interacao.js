let vetor = [];

function addLista() {
    let add = parseInt(document.getElementById('numero').value);
    let lista = document.getElementById('lista');
    if (isNaN(add)) {
        window.alert('Valor não inserido.');
        esvaziarnumero();
    }else if ((add > 100) || (add < 1)) {
        window.alert('Valor acima de 100 ou abaixo de 1');
        esvaziarnumero();
    } else if (vetor.indexOf(add) == -1) {
        vetor.push(add);
        var opcao = document.createElement('option');
        opcao.text = `Valor ${add} adicionado`;
        lista.appendChild(opcao);
        esvaziarnumero();
    } else {
        window.alert('Valor já foi adicionado');
        esvaziarnumero();
    }
}

function esvaziarnumero() {
    let zera = document.getElementById('numero');
    zera.value = '';
    zera.focus();
}

function finalizar(){
    if (vetor.length == 0) {
        window.alert('A lista não tem valores adicione antes')
    } else {    
    let resp = document.getElementById('resp');
    maiorvalor ();
    menorvalor();
    somavetor();
    mediavetor();
    resp.innerHTML = `Ao todo, temos ${vetor.length} números cadastrados. <br>
                    O maior valor informado foi ${maiorvalor()}.<br>
                    O menor valor informado foi ${menorvalor()}.<br>
                    Somando todos os valores, temos ${somavetor()} .<br>
                    A média dos valores digitados é ${mediavetor()}.`;
    }
}

function maiorvalor() {
    let maior = vetor[0];
    for (let c = 1; c < vetor.length; c++){
        if (vetor[c] > maior) {
            maior = vetor[c];
        }
    } 
    return maior;
}

function menorvalor() {
    let menor = vetor[0];
    for (let c = 1; c < vetor.length; c++) {
        if (vetor[c] < menor){
            menor = vetor[c];
        }
    }
    return menor;
}

function somavetor() {
    let soma = vetor[0];
    for (let c = 1; c < vetor.length; c++) {
        soma += vetor[c];
    }
    return soma;
}

function mediavetor() {
    let soma = somavetor();
    let media = soma / vetor.length;
    return media 
}