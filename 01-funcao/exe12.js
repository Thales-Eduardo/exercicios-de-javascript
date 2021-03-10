// n! = n .(n - 1). n - 2
// n! = n.(n - 1)
// 5! = 5. 4!
// 5 * 4 * 3 * 2 * 1 = 120

function factorial(n) {
    let re = 1;
    for(let i = n; i > 1; i--){//isso ira diminuir o numero em ordem decrecente ate o 1
        re = re * i;//aq ira multiplicar com o numero reduzido no for (re * i===n)
    };
    return re;
};

console.log(factorial(5));//120

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(5));//120