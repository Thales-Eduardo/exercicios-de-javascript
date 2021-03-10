function salario (salarioAtual, opcao) {
    let planoA = salarioAtual * 1.1;
    let planoB = salarioAtual * 1.15;
    let planoC = salarioAtual * 1.20;
    switch (opcao){
        case 'a':
            return salarioAtual = planoA;
        case 'b':
            return salarioAtual = planoB;
        case 'c':
            return salarioAtual = planoC
        default:
            return 'O plano é inválido!';
    };
};

console.log(salario(1000,'a'));
console.log(salario(1000,'b'));
console.log(salario(1000,'c'));
console.log(salario(1000,'d'));

//ou assim

function calcularReajuste(plano, salarioAtual2) {
    switch (plano) {
        case 'A':
            return salarioAtual2 * 1.1
        case 'B':
            return salarioAtual2 * 1.15
        case 'C':
            return salarioAtual2 * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));