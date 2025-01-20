const frase = "Hello, World!"

console.log(frase.indexOf("World")) // 7 - encontrar palavra o letra
console.log(frase.indexOf("W")) // 7 - Procurando apenas a letra. Podemos ver mesmo o exemplo de cima procurando
// apenas a palavra ele sempre vai pegar o indice onde começa a palavra

console.log(frase.lastIndexOf('o')) // 8 a ultima ocorrenia no ex da palavra existem dois O e vai trazer a ultimo


console.log(frase.repeat(2)) // para repedir

// .substr e .substring
console.log(frase.substr(1,6)) // não mais recomendado segundo vscode
console.log(frase.substring(1, 6))


//.trim() -> para remover espaços vazios no começo e no fim
//.trimleft e .trimright

// .split('separador') -> transforma uma string em um array

console.log('McDonald\'s') // escapando caracteres 
// \t -> escape com tab
// \n -> pular linha
// \\n -> caso eu queira escapar "\n" preciso escapar ela primeria barra