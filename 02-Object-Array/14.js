function objetoParaArray(object) {
    return Object.entries(object);
};
console.log(objetoParaArray({
    nome: "thales",
    profissao: "Desenvolvedor de software"
}));

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}));


const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
};
console.log(Object.entries(pessoa));

// Object.entries(pessoa).forEach(element => {
//     console.log(`${element[0]}: ${element[1]}`);
// });


/*O método Object.entries() retorna um array dos próprios pares  [key, value] enumeráveis de um dado objeto, na mesma ordem dos objetos providos através do loop for...in (sendo a diferença que o for-in loop enumera também propriedades dispostas na cadeia de prototipagem - prototype chain)
 */