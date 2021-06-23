function somarValores(umSemestre) {
  return (
    umSemestre[0] +
    umSemestre[1] +
    umSemestre[2] +
    umSemestre[3] +
    umSemestre[4] +
    umSemestre[5]
  );
}

let lucroUltimoSemestre = [50, -12, 1000, 300, 200, 0];
let lucrosPrimeiroQuadrimestre = [80, 453, 1000, -100, 0, 0, 0];
let lucrosPrimeiroTrimestre = [80, 453, 1000];
console.log(somarValores(lucroUltimoSemestre));
console.log(somarValores(lucrosPrimeiroQuadrimestre));
console.log(somarValores(lucrosPrimeiroTrimestre));

//vai somar cada valor do array acima de 6 índice.
