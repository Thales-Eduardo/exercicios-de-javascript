const palavras = "jAvafwsmefsef ao fqokfoaof kakofkeokf iejmfgierjgfiw";

function test(filtro, caracter) {
  let exe = [...filtro];
  return exe.reduce(
    (acc, valor, index) =>
      valor.toLowerCase() === caracter.toLowerCase() ? [...acc, index] : acc,
    []
  );
}
console.log(test(palavras, "a"));
