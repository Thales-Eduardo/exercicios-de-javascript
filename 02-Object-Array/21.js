//menor número
//reduce pq eu iria pegar o menor numero
function menorNumero(numero) {
    return numero.reduce((a, b) => { 
        return Math.min(a, b)
    });
};
console.log(menorNumero([10, 5, 35, 65]));// retornará 5
console.log(menorNumero([5, -15, 50, 3]));// retornará -15





// if(item <= index && index <= item){
//     return item
// }
