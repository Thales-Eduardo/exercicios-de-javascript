function oMaiorNumero(numero) {
    const max = numero.reduce(function(a, b) {
        return Math.max(a, b);
    })
    return max
}

console.log(oMaiorNumero([7, 2, 8, 4, 1]))