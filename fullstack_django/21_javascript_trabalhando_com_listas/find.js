const numbers = [2, 4, 6, 7, 8, 10]

// o find só vai parar de interar sobre o array quando achar a condição que atenda, neste caso quando ele encontrasse número impar
console.log(numbers.find((n) => {
    console.log(n)
    return n % 2 !== 0
}))

const pessoas = [
    { nome: "Ana", sobrenome: "Silva" },
    { nome: "Bruno", sobrenome: "Santos" },
    { nome: "Carla", sobrenome: "Oliveira" },
    { nome: "Daniel", sobrenome: "Costa" },
    { nome: "Fernanda", sobrenome: "Lima" }
  ]


const name = "Bruno" 
const result = pessoas.find(e => e.nome === name)

console.log(result)