anoBissexto = (ano) => {
    if (ano <= 0){
        return false;
    } else if (ano % 400 === 0) {
        return true;
    } else if (ano % 100 === 0) {
        return false;
    } else if (ano % 4 === 0) {
        return true;
    } else {
        return false;
    };
};
console.log(anoBissexto(0));//false
console.log(anoBissexto(4));//true
console.log(anoBissexto(100));//false
console.log(anoBissexto(400));//true
console.log(anoBissexto(800));//true
console.log(anoBissexto(2020));//true
console.log(anoBissexto(2021));//false





 /**
  checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
*/