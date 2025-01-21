// function getDiaSemana(dataString)
// {
//     const arrayDay = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
//     const arrayDate = dataString.split("/").map(item => Number(item))
//     const year = arrayDate[2]
//     const moth = arrayDate[1] - 1
//     const day = arrayDate[0]
//     const newDate = new Date(year, moth, day)

//     return arrayDay[newDate.getDay()]
// }

// console.log(getDiaSemana("10/11/2009"))

function getData(dataString)
{
    const parts = dataString.split('-')
    const correctedString = `${parts[0]}-${parts[2]}-${parts[1]}`;

    const date = new Date(correctedString)
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}
console.log(getData("2009-10-11"))
console.log(getData("2010-11-10"))
