//gera numero de sorteio aleatorio ate o 10 e comparar com numero recebido
function funcaoDaSorte(numero) {
    const aleatorio = Math.floor(Math.random(numero) * 10) + 1;
    return aleatorio === numero ? `parabens! O número sorteado foi o ${aleatorio}`: `que pena! O número sorteado foi o ${aleatorio}`; 
};
console.log(funcaoDaSorte(10));//"Parabéns! O número sorteado foi o 10"
console.log(funcaoDaSorte(5));//"Que pena! O número sorteado foi o 3"
console.log(funcaoDaSorte(5));//"Que pena! O número sorteado foi o 1"