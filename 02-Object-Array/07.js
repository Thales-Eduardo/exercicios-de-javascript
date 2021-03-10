comparar = (a, b, c) => {
    if (a < b && c < b) {
        return true;
    } else if (a > b || c > b) {
        return false;
    };
};
console.log(comparar(10, 100, 50));//true
console.log(comparar(16, 100, 160));//false
console.log(comparar(3, 150, 3));//true
console.log(comparar(3, 150, 3));//true
