diaDoMes = (dia) => {
    switch (dia) {
        case 1: case 7:
            console.log('Fim de Semana!');
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('dia util');
            break;
        default:
        console.log('Valor invalido');
            
    };
    return dia;
};

console.log(diaDoMes(1));
console.log(diaDoMes(2));
console.log(diaDoMes(3));
console.log(diaDoMes(4));
console.log(diaDoMes(5));
console.log(diaDoMes(6));
console.log(diaDoMes(7));
console.log(diaDoMes('a'));