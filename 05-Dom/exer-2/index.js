function verificar() {
  const ano = document.querySelector(".ano");
  const res = document.querySelector(".res");
  const imagem = document.querySelector(".imagem");
  const sexo = document.querySelectorAll("#um");

  let data = new Date();
  let anoAtual = data.getFullYear();
  let calculo = anoAtual - Number(ano.value);
  let genero = "";
  if (sexo[0].checked) {
    genero = "Homem";
  } else if (sexo[1]) {
    genero = "Mulher";
  }

  if (Number(ano.value) === null) {
    return alert("imposivel calcular");
  } else if (Number(ano.value) <= 0 || Number(ano.value) > anoAtual) {
    return alert("imposivel calcular");
  } else if (calculo > 18 && calculo < 30) {
    if (genero === "Homem") {
      res.innerHTML = `Sua idade e de ${calculo}`;
      imagem.src = "../img/jovem-homem.png";
    } else {
      res.innerHTML = `Sua idade e de ${calculo}`;
      imagem.src = "../img/jovem-mulher.png";
    }
  } else if (calculo > 30 && calculo < 60) {
    if (genero === "Homem") {
      res.innerHTML = `Sua idade e de ${calculo}`;
      imagem.src = "../img/homem.png";
    } else {
      res.innerHTML = `Sua idade e de ${calculo}`;
      imagem.src = "../img/mulher.png";
    }
  } else {
    if (genero === "Homem") {
      res.innerHTML = `Sua idade e de ${calculo}`;
      imagem.src = "../img/velho.png";
    } else {
      res.innerHTML = `Sua idade e de ${calculo}`;
      imagem.src = "../img/velha.png";
    }
  }
}

function limpar() {
  const ano2 = (document.querySelector(".ano").value = "");
}
