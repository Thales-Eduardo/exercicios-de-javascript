vetor = [10, 2, 3, 4, 5, 6, 7, 8, 9, 19, 11, 12, 20];
function contador (vetorNumeros){
    let quantidade = 0;
    for(let index = 0; index < vetorNumeros.length; index++){
        if(vetorNumeros[index] >= 10 && vetorNumeros[index] <= 20){
            quantidade++;
        };
    };
    console.log(quantidade);
};
contador(vetor);

//ou assim

function contador2(array) {
    const valor = array.filter(Element => {
        if(Element >= 10 && Element <= 20){
            return Element
        }
    })
    return valor.length
}

console.log(contador2([10, 2, 3, 4, 5, 6, 7, 8, 9, 19, 11, 12, 20]))