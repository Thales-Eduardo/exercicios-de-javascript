const dados = require("./dados.json");
function extrair(propriedade) {
  let valores = propriedade.transactions;
  const { income, outcome } = valores.reduce(
    (acc, transaction) => {
      switch (transaction.type) {
        case "income":
          acc.income += transaction.value;
          break;
        case "outcome":
          acc.outcome += transaction.value;
          break;
        default:
          break;
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );
  const total = income - outcome;
  return { valores, income, outcome, total };
}
console.log(extrair(dados));

//ou assim

// let income = valores
//     .map((valor) => {
//       if (valor.type === "income") {
//         return valor.value;
//       } else {
//         return 0;
//       }
//     })
//     .reduce((acc, vall) => {
//       return acc + vall;
//     });
//   let outcome = valores
//     .map((valor) => {
//       if (valor.type === "outcome") {
//         return valor.value;
//       } else {
//         return 0;
//       }
//     })
//     .reduce((acc, vall) => {
//       return acc + vall;
//     });
//   return JSON.stringify({
//     balance: {
//       income: `${income}`,
//       outcome: `${outcome}`,
//       total: `${income - outcome}`,
//     },
//   });
