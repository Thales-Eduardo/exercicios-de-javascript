function contador(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    };
    console.log(`${soma / vetor.length}`);

};
vetor = [2, 5, 6, 9, 4, 5, 6, 7, 8, 10];

contador(vetor);