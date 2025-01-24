function myName(name){
    const myName = name

    return function fullName(lastname){
        return `${name} ${lastname}`
    }
}

const primaryName = myName('Maicon')
console.log(primaryName)

const fullName = primaryName('Souza')
console.log(fullName)