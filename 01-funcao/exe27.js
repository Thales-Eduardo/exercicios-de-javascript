function comparacao(a, b, c, d) {
    //let altura1 = a;
    //let taxa1 = b;
    //let altura2 = c;
    //let taxa2 = d;
    if (a > c && c < a) {
        return `Altura: ${a} cm & taxa ${b} cm `;
    } else if (c > a) {
        return '0'
    } else {
        return 'erro!'
    };
};
console.log(comparacao(1.20, 0.4, 1.19, 0.3));