//Juro Simples
//juros == capital * imposto * tempo

function juroSimples(capital, taxa, tempo) {
    return `Juros Simples = R$ ${capital * taxa / 100 * tempo}`;
};
console.log(juroSimples(14000, 5, 6).replace('.', ','));

//Juros Compostos

function jurosCompostos(capital, taxa, tempo) {
    const resultado = capital * (1 + taxa / 100) ** tempo;
    const total = resultado.toFixed(2)
    return `Juros Simples = R$ ${total}`;
};
console.log(jurosCompostos(20000,5,4).toString().replace('.', ','));