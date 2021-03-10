function mediaDasNotas(notas) {
    const array = notas.reduce((acc, nota) => {
        return acc += nota / notas.length
    }, 0)
    return array.toFixed(2)
}

console.log(mediaDasNotas([7.2, 6.3, 7.4,]))
