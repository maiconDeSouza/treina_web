const currentDate = new Date()
const birthdayDate = new Date(1987, 11, 14)

console.log(currentDate)
console.log(birthdayDate)

//Métodos
console.log(currentDate.getMilliseconds()) // pegar os milessegundos
console.log(currentDate.getSeconds()) // pegar os segundos
console.log(currentDate.getMinutes()) // pegar os minutos
console.log(currentDate.getHours()) // pegar as houras
console.log(currentDate.getFullYear()) // pegar o ano
console.log(currentDate.getDay()) // os dias da semana 0-6
console.log(birthdayDate.getDay())

currentDate.setFullYear(2032) // setando um ano
console.log(currentDate) // retorno depois de setar

console.log(currentDate.getTime()) // total de milessegundos desde 01/01/1970