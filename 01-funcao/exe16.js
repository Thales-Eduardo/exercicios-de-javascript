function calculadora(a, opcao, b) {
    switch (opcao) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        default:
            return 'operações inválida!';
    };
};
console.log(calculadora(3, '+', 2));
console.log(calculadora(3, '-', 2));
console.log(calculadora(8, '/', 2));
console.log(calculadora(3, '*', 2));
console.log(calculadora(3, '**', 2));
