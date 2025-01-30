const myArray1 = Array(2,3) // ele cria o array, mas existe um perigo
console.log(myArray1)

const myArray2 = Array(5) // Quando ele recebe apenas um valor ele cria um array com 5 posições em vez de um array
// com a posição 5
console.log(myArray2)

const myArray3 = Array.of(5) // forma mais segura caso queira usar o Objeto Array
console.log(myArray3)

const myArray4 = myArray1.concat(myArray3) // para concatenar dois arrays
console.log(myArray4)

let has5 = myArray1.includes(5) // false - para ver se existe um valor dentro do Array
console.log(has5)

has5 = myArray4.includes(5) // true - existe esse valor dentro do array
console.log(has5)

console.log(myArray4.join("")) // 235 - serve para juntar o array em uma string
console.log(myArray4.join(",")) // 2,3,5 - você escolhe o separador

const alpha = "abc" // colocando traço entre o abc
const alphaTraco = alpha.split("").join("-")
console.log(alphaTraco)

const alphaReverse = alpha.split("").reverse().join("") // invertendo para cba
console.log(alphaReverse)

myArray4.splice(1, 0 ,"Dante") //para adicionar um valor em qual lugar do array indice, itens a serem apagados
console.log(myArray4)

myArray4.splice(1, 1, "Dona Maia") // substituir um valor pelo outro
console.log(myArray4)

myArray4.splice(1, 2) // apagando a partir do indice 1 dois valore
console.log(myArray4)
