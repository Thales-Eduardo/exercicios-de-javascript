const podrutos = [
  { id: 1, name: 'caneta', price: 2.45 },
  { id: 2, name: 'chocolate', price: 12.45 },
  { id: 3, name: 'teclado', price: 120.45 },
];

const product1 = podrutos.find(item => item.id === 1);
const product2 = podrutos.find(item => item.id === 2);
const product3 = podrutos.find(item => item.id === 3);

document.querySelector(
  '#prod1'
).innerHTML = `${product1.name}: ${product1.price}`;

document.querySelector(
  '#prod2'
).innerHTML = `${product2.name}: ${product2.price}`;

document.querySelector(
  '#prod3'
).innerHTML = `${product3.name}: ${product3.price}`;

const podruto1 = [];
const podruto2 = [];
const podruto3 = [];

function compras() {
  const quantidade1 = document.querySelector('#qnt1');
  const quantidade2 = document.querySelector('#qnt2');
  const quantidade3 = document.querySelector('#qnt3');

  !quantidade1.value && !quantidade2.value && !quantidade3.value
    ? alert('Informe a quantidade.')
    : false;

  if (quantidade1.value) {
    podruto1.push(Number(quantidade1.value));
    const response1 = podruto1.reduce((total, quantidade) => {
      return total + quantidade;
    }, 0);
    quantidade1.value = '';
    contadorDeProdutos();
    const resultado = response1 * product1.price;

    console.log(resultado.toFixed(2));
  }

  if (quantidade2.value) {
    podruto2.push(Number(quantidade2.value));
    const response2 = podruto2.reduce((total, quantidade) => {
      return total + quantidade;
    }, 0);
    quantidade2.value = '';
    contadorDeProdutos();
    const resultado = response2 * product2.price;

    console.log(resultado.toFixed(2));
  }

  if (quantidade3.value) {
    podruto3.push(Number(quantidade3.value));
    const response3 = podruto3.reduce((total, quantidade) => {
      return total + quantidade;
    }, 0);
    quantidade3.value = '';
    contadorDeProdutos();
    const resultado = response3 * product3.price;

    console.log(resultado.toFixed(2));
  }
}

function contadorDeProdutos() {
  const contador = document.querySelector('#contador');

  const response1 = podruto1.reduce((total, quantidade) => {
    return total + quantidade;
  }, 0);

  const response2 = podruto2.reduce((total, quantidade) => {
    return total + quantidade;
  }, 0);

  const response3 = podruto3.reduce((total, quantidade) => {
    return total + quantidade;
  }, 0);

  contador.innerHTML = `${response1 + response2 + response3}`;
}
