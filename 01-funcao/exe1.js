function resultado(x = 2, y = 2) {
    return `soma = ${x + y}... sub = ${x - y}... mult = ${x * y}.... divi = ${x / y}`;
};
console.log(resultado());


//      ou assim

function resposta(v, v2) {
    console.log(`soma = ${v + v2}... sub = ${v - v2}... mult = ${v * v2}.... divi = ${v / v2}`);
};

resposta(2, 8);