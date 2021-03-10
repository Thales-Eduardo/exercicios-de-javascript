//buscar por algo paracido dentro do array
function buscarPalavrasSemelhantes(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}
    
console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]));
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]));

//inicio = pro, python
//palavras = [ ]
//.includes determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false
