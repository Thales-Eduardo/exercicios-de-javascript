const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const somenteNome = pessoas.map(obj => ({nome: obj.nome}))
console.log(somenteNome)

const somenteIdade = pessoas.map(obj =>  ({idade: obj.idade}))
console.log(somenteIdade)


//adicionar id rodomico sem modificar o array original
const addIdAoObject = pessoas.map((obj, indece) => {
    const newObject = {...obj}
    newObject.id = Math.floor(Math.random(indece) * 10000)
    return newObject
})
console.log(addIdAoObject)

console.log(pessoas)