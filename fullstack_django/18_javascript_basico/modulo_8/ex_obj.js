// const myObj = {
//     name: "Dante",
//     raca: "Pug",
//     age: 4,
//     data: () => `${myObj.name} da raça ${myObj.raca} tem a idade de ${myObj.age} anos`
// }

// console.log(myObj.data())

// function factoryDog(name, raca, age){
//     return {
//         name,
//         raca,
//         age,
//         data: `${name} da raça ${raca} tem a idade de ${age} anos`
//     }
// }

// const cachorro = factoryDog("Dante", "Pug", 4)

// console.log(cachorro.data)


class Cachorro {
    constructor(name, raca, age){
        this.name = name
        this.raca = raca
        this.age = age
    }

    description() {
        return `${this.name} da raça ${this.raca} tem a idade de ${this.age} anos`
    }
}

const cachorro = new Cachorro("Dante", "Pug", 4)

console.log(cachorro.description())
