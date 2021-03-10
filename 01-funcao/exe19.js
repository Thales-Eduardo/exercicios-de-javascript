function cardapio(opcao, quantidade) {
    switch (opcao) {
        case 100:
            return `Cachorro Quente R$ ${quantidade * 3}`
        case 200:
            return `Hambúrguer Simples  R$ ${quantidade * 4}`
        case 300:
            return `Cheeseburguer R$ ${quantidade * 5.5}`
        case 400:
            return `Bauru R$ ${quantidade * 7.5}`
        case 500:
            return `Refrigerante R$ ${quantidade * 3.5}`
        case 600:
            return `Suco R$ ${quantidade * 2.8}`
        default:
            return 'Produto não existente'
    };
};
console.log(cardapio(100, 2));
console.log(cardapio(200, 2));
console.log(cardapio(300, 2));
console.log(cardapio(400, 2));
console.log(cardapio(500, 2));
console.log(cardapio(600, 2));
console.log(cardapio(700, 2));




