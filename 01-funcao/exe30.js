function contador(vetor) {
    let maior = 0;
    let menor = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vetor[i];
            menor = vetor[i];
        } else {
            if (vetor[i] > maior) {
                maior = vetor[i]
            };
            if (vetor[i] < menor) {
                menor = vetor[i]
            };
        };
    };
    return [maior, menor]
};
vetor = [-1, 10, 2, 3, 4, 5, 6, 7, 8, 9, 19, 11, 12, 20];

console.log(contador(vetor));

function verificar(vetor) {
    const max = vetor.reduce(function(a, b) {
        return Math.max(a, b);
    })
    const min = vetor.reduce(function(a, b) {
        return Math.min(a, b);
    })
    return `${max} ${min}`
}

console.log(verificar([-1, 10, 2, 3, 4, 5, 6, 7, 8, 9, 19, 11, 12, 20]));