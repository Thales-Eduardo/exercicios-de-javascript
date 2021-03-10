function oi (nome){
    return `Olá ${nome}!`;
};
console.log(oi('maria'));

/// ou assim

function cumprimentar(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
};  
console.log(cumprimentar('João'));

/// ou assim

function cumprimentar(nome) {
    return "Olá, " + nome + "!"
}
console.log(cumprimentar('Ana'));    
