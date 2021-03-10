function oQuadradoDeCincoNumero(numero) {
    return numero.map(item => {
        return Math.pow(item, item)
    })
}
console.log(oQuadradoDeCincoNumero([1, 2, 3, 4, 5]))

// ou assim item ** item