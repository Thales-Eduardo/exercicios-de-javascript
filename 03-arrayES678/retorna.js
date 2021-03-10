//retorne a partir de um parametro especificado
function retorne(array, valor) {
    return array.slice(0, valor)
}

console.log(retorne([7, 9, 0, -2]))
console.log(retorne([], 3))
console.log(retorne([7, 9, 0, -2], 3))
console.log(retorne([7, 9, 0, -2], 6))
console.log(retorne([7, 9, 0, -2], -3))