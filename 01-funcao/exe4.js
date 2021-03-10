function soma (dividendo, divisor){
    return `Resposta = ${dividendo / divisor} Resto = ${dividendo % divisor}`;

};

console.log(soma(9,2));

//                         OU assim

function resposta(divid, divis){
    console.log(`Resposta = ${divid / divis}`);
    console.log(`Resto = ${divid % divis}`);
};

console.log(resposta(9,2));