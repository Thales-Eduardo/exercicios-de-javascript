function contarPalavras(frase){
    let palavra = frase.split(" ");
    return palavra.length;
};
console.log(contarPalavras("Sou uma frase"));// retornará 3
console.log(contarPalavras("Me divirto aprendendo a programar")); // retornará 5

/*
O método split() divide uma String em uma lista ordenada de substrings, 
coloca essas substrings em um array e retorna o array. 
A divisão é feita procurando um padrão, 
onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
*/