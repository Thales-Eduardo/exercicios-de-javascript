
function equacao(ax2, bx, c) {
    let resultado = [];
    let delta = (bx ** 2) - (4 * 1 * c);
    if(delta < 0){
        console.log('Delta negativo!');
    };
    let x1 = (- bx + Math.sqrt(delta)) / 2 * ax2; /// mais ou menos em javascript e assim (- variavel +)
    let x2 = (- bx - Math.sqrt(delta)) / 2 * ax2 ;
    resultado.push(x1);//para adicionar os resultado no array declarado em cima
    resultado.push(x2);//para adicionar os resultado no array declarado em cima
    return resultado;
};

console.log(equacao(1,3,2));

// (bx ** 2)-( 4 * ax2 * c)   estudar o math()