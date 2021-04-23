const dados = require("./dados.json");
function extrair(propriedade) {
  let valores = propriedade.transactions;

  let income = valores
    .map((valor) => {
      if (valor.type === "income") {
        return valor.value;
      } else {
        return 0;
      }
    })
    .reduce((acc, vall) => {
      return acc + vall;
    });
  let outcome = valores
    .map((valor) => {
      if (valor.type === "outcome") {
        return valor.value;
      } else {
        return 0;
      }
    })
    .reduce((acc, vall) => {
      return acc + vall;
    });
  return JSON.stringify({
    balance: {
      income: `${income}`,
      outcome: `${outcome}`,
      total: `${income - outcome}`,
    },
  });
}
console.log(extrair(dados));
