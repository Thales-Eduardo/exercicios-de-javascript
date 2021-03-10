let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0";

function exe8 (stringPontuacoes){
    let pontuacoes = stringPontuacoes.split(", ");//para dividir uma string em uma matriz de substring
    let qndQuebraDeRecords = 0;
    let piorJogo = 1;
    let maiorPontuacao = pontuacoes[0];
    let menorPontuacao = pontuacoes[0];

    for (let i = 1; i < pontuacoes.length; ++i){
        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i];
            qndQuebraDeRecords++
        }else if(pontuacoes[i] < menorPontuacao){
            piorJogo = i;
        };
    };
    return [qndQuebraDeRecords, piorJogo]
};
console.log(exe8(stringPontuacoes));

//const notasbaixas = notas.filter(nota => notas < 7);
//console.log(notabaixas);

/*
for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))
*/