function maiorDeIdade(idade) {
    return idade.filter(valor => valor > 18)
}
console.log(maiorDeIdade([12, 13, 34, 37, 35, 10, 11]))