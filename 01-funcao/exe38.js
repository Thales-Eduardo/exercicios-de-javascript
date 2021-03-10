function impar(inicil, fim){
    for(let i = inicil; i <= fim; i++){
        if(i < 0){
            console.log('Número errado');
            break;
        }else if(i % 2 === 1){
            console.log(i);
        };
    };
};
impar(-1,100);
impar(0,100);
                               //ou assim

function imprimirImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim        
    }

    for (let i = inicio; i <= fim; i++) {        
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

imprimirImpares(19, 3)