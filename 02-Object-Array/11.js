function recebeUmArray(array) {
    const indicepri = 0;
    const indiceult = array.length - 1;
    const pri = array[indicepri]
    const ult = array[indiceult]
    return [pri, ult];
};
console.log(recebeUmArray([2, 'e', 4]));

///ou assim 

function receberPrimeiroEUltimoElemento(primeiroElemento, ...elementosRestantes) {
    const ultimoElemento = elementosRestantes.pop()
    return [primeiroElemento, ultimoElemento]
};

console.log(receberPrimeiroEUltimoElemento(2, 'e', 4));

