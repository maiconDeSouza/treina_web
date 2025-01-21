const myArray = [2, 4, 6, 8, 10]
const myArray2 = [2, 4, 6, 8, 9, 10]

console.log(myArray.length) // tamanho do array

const funEven = n => n % 2 == 0
console.log(myArray.every(funEven)) // true - vai testar uma condição para ver se todos os valores desse 
// array atende essas condições
console.log(myArray2.every(funEven)) // false

console.log(myArray2.some(n => n % 2 !== 0)) // true - retorna pelo menos se um atender a condição

const arrEven = myArray2.filter(funEven) // deixando só números impares
console.log(arrEven)


const nomes = [
    "Ana",
    "Carlos",
    "Beatriz",
    "Diego",
    "Fernanda",
    "Gustavo",
    "Dante",
    "Isabela",
    "João",
    "Larissa",
    "Marcos",
    "Natalia",
    "Pedro",
    "Renata",
    "Thiago",
    "Vanessa"
]

let hasName = nomes.find(name => name === "Dante") // Dante - encontrar determinado valor e ele retorna o valor
console.log(hasName)

hasName = nomes.find(name => name === "Maia") // undefined
console.log(hasName)

hasName = nomes.findIndex(name => name === "Maia") // retorna o indice se existir ou -1
console.log(hasName)

const sum = myArray.reduce((n, current) => {
    return n += current
}, 0)

console.log(sum)

const objNames = nomes.reduce((obj, current) => {
    obj[current] = current
    return obj
}, {})

console.log(objNames)

const double = myArray.map(n => n * 2)
console.log(double)