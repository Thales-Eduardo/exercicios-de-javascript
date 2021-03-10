function filtrar(vetor) {
    return vetor.filter(item => typeof item === typeof Number())
};
console.log(filtrar(["Javascript", 1, "3", "Web", 20]));//[1, 20]
console.log(filtrar(["a", "c"]));
console.log(filtrar(['ola']));
console.log(filtrar([2, 'e', 4]));
