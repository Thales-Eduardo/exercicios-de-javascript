const vetor1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numero1 = [];
let numero2 = [];

//Com o call back   numero par
numero1 = vetor1.filter(function (vetor1){
    return vetor1 % 2 === 0;
});
console.log(numero1);

//com call back e arrow   número impar
numero2 = vetor1.filter(vetor1 => vetor1 % 2);
console.log(numero2);

// ou assim

 let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}
paresImpares(vetor)


