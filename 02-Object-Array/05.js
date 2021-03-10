//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar números de strings.
compara = (a, b) => {
    if (typeof a != typeof b) {
        return false;
    } else {
        return a >= b;
    };
};
console.log(compara(2, 2));//true
console.log(compara(2, '2'));//false
console.log(compara(5, 2));//true


const comparar = (a, b) => {
    if (typeof a != typeof b) return false
    return a >= b
}
console.log(comparar(2, 2));//true
console.log(comparar(2, '2'));//false
