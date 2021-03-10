let arr1 = [1, 2, 3, 4, 5];

function multiplicaVertor(arr1, multiplicador) {
    let arr2 = [];
    arr1.forEach(elemento => {
        arr2.push(elemento * multiplicador)
    })
    return arr2;
};

console.log(multiplicaVertor(arr1, 3));
