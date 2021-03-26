const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

//retorne pessoas com o nome com mais ou igual a 7 letras
const acessarNomeGrande = pessoas.map(e => e.nome).filter(e => e.length >= 7)
console.log(acessarNomeGrande)

//returne as pessoas com mais de 50 anos
const maiorDeCinquetaAnos = pessoas.filter(e => e.idade > 50)
console.log(maiorDeCinquetaAnos)

//retorne as pessoas cujo nome termina com a
const nomesTerminandoEmA = pessoas.map(e => e.nome).filter(e => {
    return e.toLowerCase().endsWith('a')
})
console.log(nomesTerminandoEmA)