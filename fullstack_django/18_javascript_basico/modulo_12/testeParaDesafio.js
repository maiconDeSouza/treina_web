const m = [2, 4, 5, 9]
const n = [2, 4, 11, 12]

function diferenca(m, n){
    const diferentes = []

    m.forEach(number => {
        if(!n.includes(number)){
            diferentes.push(number)
        }
    })

    n.forEach(number => {
        if(!m.includes(number)){
            diferentes.push(number)
        }
    })

    diferentes.forEach(number => {
        console.log(number)
    })
}

diferenca(m, n)