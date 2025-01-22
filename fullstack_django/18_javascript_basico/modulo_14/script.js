const nomes = [
    "Ana",
    "Bruno",
    "Carlos",
    "Daniela",
    "Eduardo",
    "Fernanda",
    "Gabriel",
    "Helena",
    "Isabela",
    "João",
    "Karen",
    "Leonardo",
    "Mariana",
    "Natalia",
    "Otávio"
  ]

  const ul = document.querySelector("ul")

  function criarLista(){
    nomes.forEach(item => {
        const li = document.createElement("li")
        li.innerText = item
        ul.appendChild(li)
    })
  }