function arrayPar(par) {
    return par.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0;
        const indicePar = indice % 2 === 0;
        return numeroPar && indicePar;
    });
};
console.log(arrayPar([1, 2, 3, 4]));
console.log(arrayPar([10, 70, 22, 43]));//[10,22]


//receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornarĂ¡ []
// receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornarĂ¡ [10, 22