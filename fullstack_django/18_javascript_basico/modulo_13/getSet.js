// com getter e setter temos maior autonomia em atribuir e pegar valores a objs

const myObj = {
    a: 2,
    get b(){
        return 4
    }
}

console.log(myObj) // { a: 2, b: [Getter] }
console.log(myObj.b) //4

const myObj2 = {
    name: "",
    lastname: "",
    set addName(newName){
        this.name = newName
        return this.name
    },
    set addLastName(newLastName){
        this.lastname = newLastName
        return this.lastname
    },

    get fullName(){
        return `${this.name} ${this.lastname}`
    }
}

console.log(myObj2.addName = "Dante")
myObj2.addLastName = "Dante Parrudo Kiko III"

console.log(myObj2.fullName)