function contarCaractere (buscarCaracter, frases){ 
    return [...frases].filter(caracter => caracter === buscarCaracter).length;
};   
console.log(contarCaractere("r", "A sorte favorece os audazes "));//retornarĂ¡ 2
console.log(contarCaractere("c", "Conhece-te a ti mesmo "));//retornarĂ¡ 1

// function contarCaractere(caractereBuscado, frase) {
//     let contador = 0
//     for (let i = 0; i < frase.length; i++)
//     if (frase.charAt(i) === caractereBuscado)
//     contador++
//     return contador
// };
    