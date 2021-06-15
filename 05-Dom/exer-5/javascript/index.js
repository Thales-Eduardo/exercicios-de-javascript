const senha = document.querySelector("#senha-res");
const caixa = document.querySelector("#caixa");
const Senhagerada = document.querySelector("#gerar");

const listaDeSenhaComum = [];
const listaDeSenhaRapida = [];
const listaDeSenhaPrioritaria = [];

let geradorDoNum = 1;

function gerarSenhaComum() {
  let senhaComumGerada = `C-${geradorDoNum++}`;
  listaDeSenhaComum.push(senhaComumGerada);
  Senhagerada.innerHTML = `Sua senha é: ${senhaComumGerada}`;
}

function gerarSenhaRapida() {
  let senhaRapidaGerada = `R-${geradorDoNum++}`;
  listaDeSenhaRapida.push(senhaRapidaGerada);
  Senhagerada.innerHTML = `Sua senha é: ${senhaRapidaGerada}`;
}

function gerarSenhaPrioritaria() {
  let senhaPrioritariaGerada = `P-${geradorDoNum++}`;
  listaDeSenhaPrioritaria.push(senhaPrioritariaGerada);
  Senhagerada.innerHTML = `Sua senha é: ${senhaPrioritariaGerada}`;
}

function proximoCaixa1() {
  return (
    listaDeSenhaPrioritaria.shift() ||
    listaDeSenhaRapida.shift() ||
    listaDeSenhaComum.shift() ||
    "Vazio"
  );
}

function proximoCaixa2E3() {
  return (
    listaDeSenhaRapida.shift() ||
    listaDeSenhaPrioritaria.shift() ||
    listaDeSenhaComum.shift() ||
    "Vazio"
  );
}

function proximoCaixa4() {
  return (
    listaDeSenhaComum.shift() ||
    listaDeSenhaPrioritaria.shift() ||
    listaDeSenhaRapida.shift() ||
    "Vazio"
  );
}

function caixa1() {
  senha.innerHTML = `${proximoCaixa1()}`;
  caixa.innerHTML = "Caixa 1";
}

function caixa2() {
  senha.innerHTML = `${proximoCaixa2E3()}`;
  caixa.innerHTML = "Caixa 2";
}

function caixa3() {
  senha.innerHTML = `${proximoCaixa2E3()}`;
  caixa.innerHTML = "Caixa 3";
}

function caixa4() {
  senha.innerHTML = `${proximoCaixa4()}`;
  caixa.innerHTML = "Caixa 4";
}
