function pontuacao(numero) {
  const posicoes = ["ouro", "prata", "bronze"];
  if (numero <= 3 && numero >= 1) {
    return posicoes[numero - 1];
  }
  return "nada";
}

console.log(pontuacao(1));
