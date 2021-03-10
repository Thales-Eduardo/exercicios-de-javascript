function soma (valor1, valor2){   
    const resultado = valor1 + valor2;
    const total = resultado.toFixed(2);
    return `R$ = ${total}`
};
console.log(soma(0.1, 0.2).toString().replace('.', ','));

//                            ou assim

function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais);
}
formatarValorDecimal(0.1 + 0.2);