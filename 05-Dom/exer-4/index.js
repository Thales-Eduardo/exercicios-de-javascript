function executar() {
  const num = document.querySelector("input");
  const tab = document.querySelector("select");

  let numero = Number(num.value);

  if (!numero) {
    alert("Por gentileza, adicione um Número.");
  } else {
    tab.innerHTML = "";
    for (let i = 0; i < 11; i++) {
      const res = document.createElement("option");
      res.innerHTML += ` ${numero} X ${i} = ${i * numero} `;
      tab.appendChild(res);
    }
  }
}

function limpar() {
  const num = (document.querySelector("input").value = "");
}
