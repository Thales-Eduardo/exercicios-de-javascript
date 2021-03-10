//inverter um Object
function inverter(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map( parChaveValor => parChaveValor.reverse() )
    return Object.fromEntries(paresDeChaveValorInvertidos)
};    
console.log(inverter({ a: 1, b: 2, c: 3}));//retornará { 1: "a", 2: "b", 3: "c"}







