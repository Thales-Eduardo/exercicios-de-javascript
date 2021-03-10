function escola(nota) {

    if (nota == 38) {
        console.log(`Aprovado!! nota = ${nota += 2}`);
    } else if (nota < 100 && nota > 40) {
        console.log(`Aprovado!! nota = ${nota += 1}`);
    } else if (nota == 100){
        console.log(`Aprovado!! nota = ${nota}`);
    }else if(nota > 100){
        console.log('Número invalido tente outra vez');
    }else if (nota < 38){
        console.log('Reprovado');
    };
    
};
escola(101);
escola(100);
escola(30);
escola(38);
escola(88);
escola(61);
