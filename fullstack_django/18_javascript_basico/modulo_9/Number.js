console.log(Number.MAX_SAFE_INTEGER) //9007199254740991 -> valor maximo que conseguimos trabalhar com segurança
console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991 -> valor mínimo 

console.log(Number.isInteger(23)) // true -> Se é um numero inteiro 
console.log(Number.isInteger(23.1)) // false -> Se é um numero inteiro 

console.log(Number.isNaN("23")) // False -> Aqui é para descobrir se numero é um Not a Number
console.log(Number.isNaN(5 * "x")) // True -> Aqui ele é um NaN
console.log(Number.isNaN(NaN)) // True -> Aqui ele é um NaN

console.log(isNaN("asd")) // True -> essa ele vai pegar tudo que não é um número
console.log(Number.isNaN("asd")) // False -> ele só vai considerar verdadeiro se realmente for um NaN

