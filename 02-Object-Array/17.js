function somarNumeros(array){
    return array.reduce((acumulador,atual) =>{
        return acumulador + atual
    });
};
console.log(somarNumeros([10, 10, 10]));//30
console.log(somarNumeros([15, 15, 15, 15]));//60


/*
somarNumeros([10, 10, 10]) // retornarĂ¡ 30
somarNumeros([15, 15, 15, 15]) // retornarĂ¡ 60
 */