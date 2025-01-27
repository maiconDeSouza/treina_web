const url = 'http://localhost:3002/api/alunos'

async function getAlunos() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

getAlunos()

async function createAlunos(aluno){
    const alunoJSON = JSON.stringify(aluno)
    const result = await fetch(url, {
        method: "POST",
        body: alunoJSON
    })

    console.log(result)
}

const newAlunos = {
    nome: "Luciana",
    idade: 23,
    sexo: "Feminino",
    curso: "Física Nuclear",
    notas: [
        10,
        10,
        10
    ]
}

createAlunos(newAlunos)