compararValor = (a) => {
    if(typeof a === typeof Boolean()){
        return ! a;
    }else if(typeof a === typeof "string"){
        return `${a} = "string"`;
    }else if(typeof a === typeof Number()){
        return -a;//todo número negativo vai ser possitivo 
    };
};
console.log(compararValor(true));//false
console.log(compararValor(false));//true
console.log(compararValor("1"));//'string'
console.log(compararValor(-2000));//vai voltar numero possitivo 2000
console.log(compararValor("programação"));//'string'

function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
};
    