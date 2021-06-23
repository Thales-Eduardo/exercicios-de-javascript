function Meses(umPeriodo) {
  let lucroMeses = [];
  for (let mes = 0; mes < umPeriodo.length; mes++) {
    if (umPeriodo[mes] > 0) {
      lucroMeses.push(umPeriodo[mes]);
    }
  }
  return lucroMeses;
}

console.log(Meses([-1, 1, 3, 4, 5, 6, 7, 8]));
