const pets = ["Dante", "Talu", "Dona Maia", "Delinha"]

console.log(pets.splice(0, 3)) // ["Dante", "Talu", "Dona Maia"] -> a partir do indice zero eu quero pegar 3 itens
console.log(pets) // ['Delinha'] -> ficou só a relinha

pets.splice(0, 1, 'Dante', 'Talu', 'Dona Maia')
console.log(pets) //[ 'Dante', 'Talu', 'Dona Maia' ]

pets.splice(pets.length - 1, 0, 'Delinha') // Não faria sentido ter este trabalho todo para add um item no fim o mais simples .push()
console.log(pets) //[ 'Dante', 'Talu', 'Delinha', 'Dona Maia' ]

pets.splice(1, 0, 'Kiko') // aqui faria mais sentido, pois queria add em um local especifico sem ser no final
console.log(pets)