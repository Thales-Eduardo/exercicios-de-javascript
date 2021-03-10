duplicar = (n) => {
    let vetor = [];
    for(let i = 0; i < n; i++){
        vetor.push('+');
    };
    return vetor;  
};
console.log(duplicar(2));
// duplicar(7)

//ou assim
function simboloMais(quantidade) {
    return "+".repeat(quantidade);
};