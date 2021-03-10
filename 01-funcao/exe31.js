function contador(vetor) {
    let numeroNegativo = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            numeroNegativo++
        };
    };
    console.log(numeroNegativo);
};
vetor = [-1, -2, -2, -3, -4, -5, -6, -7, -8, -9, -19, -11, -12, -20];

contador(vetor);