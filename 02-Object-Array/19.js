function calcularMedia(media) {
    let total = 0;
    for(let i in media){
        total += media[i]
    }
    return total / media.length;
};

console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));

// calcularMedia([0, 10]) // retornará 5
// calcularMedia([1, 2, 3, 4, 5]) // retornará 3