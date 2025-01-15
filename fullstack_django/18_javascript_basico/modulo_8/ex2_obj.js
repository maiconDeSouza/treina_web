const obj1 = {
    a: 1,
    b: 2
}

const obj2 = {
    a: 1,
    b: 2
}

const obj3 = {...obj2}

const obj4 = obj1

console.log( obj1 === obj2 )
console.log( obj3 === obj2 )
console.log( obj4 === obj1 )

obj1.a = 11
obj2.a = 21
obj3.a = 31
obj4.a = 41

console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj4)
