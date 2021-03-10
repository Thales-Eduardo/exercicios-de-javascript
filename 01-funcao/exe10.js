function soma(n1) {
    if (n1 % 3 == 0) {
        console.log(`${n1 / 3}`);
    } else {
        console.log('false');
    };

};
soma(8);

// em loop
let numero = 0;
while (numero <= 150) {
    numero % 3 == 0 ? console.log(numero) : '';
    numero++;
};