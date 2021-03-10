function sla(item, qtn) {
  let resultado = [];
  for (let i = 0; i < qtn; i++){
     resultado.push(item);
  };
  return resultado;
};

console.log(sla(7, 3));
// return vetor.push(item)
