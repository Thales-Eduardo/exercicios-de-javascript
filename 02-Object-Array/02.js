//Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

converter = (idade, ano = 364) => {
    return idade * ano;
};
console.log(converter(25));

//ou assim

converter2 = (idade) => {
    return idade * 364;
};
console.log(converter2(70));

//ou assim

const converter3 = idade => idade * 364;
console.log(converter3(70));