function escola(codigo, a, b, c) {
    let peso1 = 4;
    let peso2 = 3;
    let totalA = a * peso1 + b * peso2 + c * peso2; //com () posso colocar ()/10e nao vai precisar do mediA
    let mediaA = totalA / 10;

    let totalB = a * peso2 + b * peso1 + c * peso2;
    let mediaB = totalB / 10;

    let totalC = a * peso2 + b * peso2 + c * peso1;
    let mediaC = totalC / 10;

    let igual = a * peso2 + b * peso2 + c * peso2;
    let mediaI = igual / 10;

    if (mediaA >= 5) {
        return `Codigo do aluno ${codigo}: ${mediaA} Aprovado!`;

    } else if (mediaB >= 5) {
        return `Codigo do aluno ${codigo}: ${mediaB} Aprovado!`;

    } else if (mediaC >= 5) {
        return `Codigo do aluno ${codigo}: ${mediaC} Aprovado!`;

    }else if(mediaI >= 5){
        return `Codigo do aluno ${codigo}: ${mediaC} Aprovadoo!`
        
    }else {
        return 'reprovado '
    };
};
console.log(escola(134, 2.8, 6, 3.5));

//                      Ou assim

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)