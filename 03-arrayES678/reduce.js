const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 7, 8, 11, 15, 22, 27]

const somarNumeros = numeros.reduce((acc, valor) => {
    return acc + valor / numeros.length
}, 0) 
console.log(somarNumeros.toFixed(2))



const pessoas = [
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Luiz', idade: 62},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const somarIdade = pessoas.map(e => e.idade).reduce((acc, valor) =>{
    return acc += valor
}, 0)
console.log(somarIdade)

const maiorIdade = pessoas.reduce((acc, valor) => {
    if(acc.idade > valor.idade){
        return acc
    }
    return valor
})

console.log(maiorIdade)