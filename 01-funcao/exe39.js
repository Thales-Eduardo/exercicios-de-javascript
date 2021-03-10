let vetor1 = [1, 5, 8, 7, 2];
let vetor2 = [2, 7, 8, 5, 1];

function inveterValor(veto1,veto2){
    console.log(veto1.reverse(veto2));
    console.log(veto2.reverse(veto1));
};
inveterValor(vetor1,vetor2);

// ou assim

function trocaValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)

//slice() seleciona os elementos do array/vetor
//reverse() inverta a ordem dos elementos em array/vetor
/*O método sort () classifica os itens de um array.

A ordem de classificação pode ser alfabética ou numérica e crescente (para cima) ou decrescente (para baixo).

Por padrão, o método sort () classifica os valores como strings em ordem alfabética e crescente.

Isso funciona bem para strings ("Apple" vem antes de "Banana"). No entanto, se os números forem classificados como strings, "25" é maior que "100", porque "2" é maior que "1".

Por causa disso, o método sort () produzirá um resultado incorreto ao classificar os números.

Você pode corrigir isso fornecendo uma "função de comparação" (consulte "Valores de parâmetro" abaixo).
 */