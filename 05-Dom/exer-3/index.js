function executar() {
  const inicio = document.querySelector(".inicio");
  const fim = document.querySelector(".fim");
  const passo = document.querySelector(".passo");
  const res = document.querySelector(".res");
  const resposta = document.querySelector(".contando");
  let ini = Number(inicio.value);
  let end = Number(fim.value);
  let valor = Number(passo.value);
  if (!ini || !end) {
    res.innerHTML = "Preencha os campos por gentileza";
  } else if (!valor) {
    alert("Impossível pular de zero em zero (alterando para 1)");
    valor = 1;
  }
  for (let i = ini; i < end; i += valor) {
    res.innerHTML = "Contando:";
    resposta.innerHTML += `👉 ${i}, `;
  }
}

function limpar() {
  const inicio = (document.querySelector(".inicio").value = "");
  const fim = (document.querySelector(".fim").value = "");
  const passo = (document.querySelector(".passo").value = "");
  const resposta = document.querySelector(".contando");
  resposta.innerHTML = "";
}
