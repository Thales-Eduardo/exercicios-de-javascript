const body = document.querySelector("body");
const msg = document.querySelector(".msg");
const imagem = document.querySelector(".imagem");

const data = new Date();
const horas = data.getHours();
msg.innerHTML = `Agora são ${horas} horas`;

if (horas >= 0 && horas < 12) {
  imagem.setAttribute("src", "../img/manha.png");
} else if (horas > 12 && horas < 18) {
  imagem.setAttribute("src", "../img/tarde.png");
  body.style.backgroundColor = "#c0c5c5";
} else if (horas >= 18) {
  imagem.setAttribute("src", "../img/noite.png");
  body.style.backgroundColor = "#10153d";
}
