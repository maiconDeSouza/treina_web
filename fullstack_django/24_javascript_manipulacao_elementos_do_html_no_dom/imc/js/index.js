const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const button = document.querySelector('button')
const p = document.querySelector('p')

const imcScales = [
    {
        min: 0,
        max: 18.4,
        text: "Abaixo do Peso",
        className: "underweight"
    },
    {
        min: 18.5,
        max: 24.9,
        text: "Peso Normal",
        className: "normal-weight"
    },
    {
        min: 25,
        max: 29.9,
        text: "Sobrepeso",
        className: "overweight"
    },
    {
        min: 30,
        max: 34.9,
        text: "Obesidade Grau 1",
        className: "obesity-grade-1"
    },
    {
        min: 35,
        max: 39.9,
        text: "Obesidade Grau 2",
        className: "obesity-grade-2"
    },
    {
        min: 40,
        max: Infinity,
        text: "Obesidade Grau 3 (Mórbida)",
        className: "obesity-grade-3"
    }
]

function calculateIMC(weight, height){
    const imc = weight / (height * height)
    return imc
}

function indexIMC(imc){
    const scale = imcScales.find(i => imc >= i.min && imc <= i.max)
    return scale
}

button.addEventListener('click', e => {
    e.preventDefault()
    p.className = ''
    p.textContent = ''
    const weightNumber = Number(weight.value)
    const heightNumber = Number(height.value)

    if(!weightNumber || !heightNumber){
        const text = document.createTextNode('Valor inválido! Preencha todos os campos e digite apenas números')
        p.appendChild(text)
        return
    }

    const imc = calculateIMC(weightNumber, heightNumber)
    const scale = indexIMC(imc)

    p.classList.add(scale.className)
    const text = document.createTextNode(`Seu imc é de ${imc.toFixed(2)} - ${scale.text}`)
    p.appendChild(text)

})