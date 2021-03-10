function ladoDoTriangulo(a, b, c) {
    if (a === b && a === c) {
        console.log('Equilátero');

    } else if (a === b || a === c || b === c) {
        console.log('Isósceles');

    } else if (a !== b && a !== c) {
        console.log('Escaleno');

    } else {
        console.log('Erro!');
    };
};

ladoDoTriangulo(2, 2, 2);
ladoDoTriangulo(2, 2, 3);
ladoDoTriangulo(1, 2, 3);
