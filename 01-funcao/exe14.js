function qualFruta(fruta) {
    switch (fruta) {
        case 'maça':
            console.log(`Não vendemos esta maça aqui`);
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis');
            break;
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo');
            break;
        default:
            console.log('Erro, fruta inválida.');
    };
};
qualFruta('maça');
qualFruta('kiwi');
qualFruta('melancia');
qualFruta('alcatra');
