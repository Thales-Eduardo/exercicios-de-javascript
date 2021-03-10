function clube(idade) {
    let taxaFixa = 100;
    if (idade < 10 && idade > 0) {
        return `${taxaFixa + 80} Reais`;
    } else if (idade > 10 && idade <= 30) {
        return `${taxaFixa + 50} Reais`;
    }else if(idade > 30 && idade <= 60){
        return `${taxaFixa + 95} Reais`;
    }else if (idade >= 61){
        return `${taxaFixa + 130} Reais`;
    }else{
        return 'Valor invalido'
    };
}
console.log(clube(9));//180
console.log(clube(30));//150
console.log(clube(31));//195
console.log(clube(61));//230
console.log(clube(-1));//invalido
