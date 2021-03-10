let vetorInteiro = [1, 2, 3, 4];
let vetorString = ['thales', 'eduardo', 'santos', 'melo'];
let vetorDouble = [1.2, 2.3, 3.3, 4.5];
// let a = vetorInteiro.concat(vetorDouble, vetorString);

function concatenar(){
     return vetorInteiro.concat(vetorDouble,vetorString); // ... para espalhar 
}

//console.log(a);
console.log(concatenar());

//                              ou assim

let vetorInteiro1 = [1, 2, 3, 4]
let vetorString1 = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble1 = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro1, vetorDouble1))
console.log(concatenar(vetorDouble1, vetorString1))