const myName = 'Maicon Pereira de Souza'
const cpf = '123.456.789-45'


console.log(myName.replace('ic', 'yk')) //Maykon Pereira de Souza
console.log(myName.replace('a', '@')) //M@icon Pereira de Souza -> só substitui a primeira ocorrencia
console.log(myName.replaceAll('a', '@')) //M@icon Pereir@ de Souz@ -> vai substituir todas as ocrrencias

console.log(myName.replace(/a/, '@')) //M@icon Pereira de Souza -> usando expresões regulares
console.log(myName.replace(/a/g, '@')) //M@icon Pereir@ de Souz@

console.log(cpf.replace(/[0-9]/g, "")) // ..- -> retirando todos números
console.log(cpf.replace(/[^0-9]/g, "")) // 12345678945 -> invertendo a logia e deixando apenas os números

