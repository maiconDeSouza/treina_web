const myObj = {
    a: 2,
    b: 4,
    c: 6,
}

console.log(Object.keys(myObj)) // retorna um array com as chaves do obj
console.log(Object.values(myObj)) // retorna um array com os valores de um obj

//descobrindo se há um propriedade no obj
console.log(myObj.hasOwnProperty('a')) // true
console.log(myObj.hasOwnProperty('d')) // false
// forma mais simples
console.log('a' in myObj) // true
console.log('d' in myObj) // false

//retonando chave e valor dentro de um array
console.log(Object.entries(myObj))

// usando o método seal do objeto global a gente proibe a criação de novas propriedades, mas podemos alterar elas
Object.seal(myObj)
myObj["c"] = 23
myObj["d"] = "new"
console.log(myObj)

//congelando o obj para não permidir alterações e nem inserção ou deletadas
Object.freeze(myObj)
myObj["a"] = 15
console.log(myObj)

// métodos para verificar se o obj está selado ou congelado
console.log(Object.isSealed(myObj))
console.log(Object.isFrozen(myObj))
