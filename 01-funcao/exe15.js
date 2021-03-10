function concessionaria(carro) {
    switch (carro) {
        case 'hatch':
            console.log('Compra efetuada com sucesso!');
            break;
        case 'sedan':
        case 'moto':
        case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?');
            break;
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui!');
            break;
    };
};

concessionaria('hatch');
concessionaria('sedan');
concessionaria('caminhonete');
concessionaria('moto');
concessionaria('jetski');