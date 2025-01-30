const str = 'a'
const str2 = 'b'

console.log(str.localeCompare('b', 'pt-BR')) // -> -1 compara se a letra é maior
console.log(str2.localeCompare('a', 'pt-BR')) // -> 1

console.log('2'.localeCompare('10')) // 1 -> aqui a resposta não era para ser essa
console.log('2'.localeCompare('10', 'pt-BR', {numeric: true})) // -1 -> 2 é menor que 10

console.log('a' > 'b') // false 