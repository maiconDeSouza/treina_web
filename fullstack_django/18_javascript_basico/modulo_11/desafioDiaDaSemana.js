function phrase(day, dateString){
    const arrayDay = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    return `${dateString} foi no dia da semana ${arrayDay[day]}`
}

function dayOfTheWeek(dateString){
    const regex = /^\d{4}-\d{2}-\d{2}$/

    if (!regex.test(dateString)) {
        return `formato de data invalida`
    }

    const newDate = new Date(dateString)
    const day = newDate.getUTCDay() 
    const result = phrase(day, dateString)

    return result
}



console.log(dayOfTheWeek("2001-03-15"))
console.log(dayOfTheWeek("1995-07-10"))
console.log(dayOfTheWeek("1980-12-25"))
console.log(dayOfTheWeek("2010-06-01"))
console.log(dayOfTheWeek("1975-09-22"))
console.log(dayOfTheWeek("1999-11-05"))
console.log(dayOfTheWeek("2022-08-12"))
console.log(dayOfTheWeek("1960-04-18"))
console.log(dayOfTheWeek("1975-001-01"))
console.log(dayOfTheWeek("1945-05-08"))
console.log(dayOfTheWeek("1987-12-14"))
console.log(dayOfTheWeek("1956-01-02"))
console.log(dayOfTheWeek("1978-12-09"))
console.log(dayOfTheWeek("2025-01-20"))