function acrescimo(umPeriodo) {
  let quantidade = 0;
  for (let mes = 0; mes < umPeriodo.length; mes++) {
    if (umPeriodo[mes] > 0) {
      quantidade += 1;
    }
  }
  return quantidade;
}

console.log(acrescimo([1, 2, 3, 4, 5, 6]));
