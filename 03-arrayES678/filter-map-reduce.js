const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 7, 8, 11, 15, 22, 27]

const aSomarDoDobroDeCadaElemento = numeros
.filter(e => e % 2 === 0)
.map(e => e * 2)
.reduce((acc, valor) => {
    return acc + valor
}, 0)
console.log(aSomarDoDobroDeCadaElemento)

