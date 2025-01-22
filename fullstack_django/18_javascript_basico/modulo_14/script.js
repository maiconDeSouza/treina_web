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
  

  function criarLista(nomes, ulSecletor){
    if(!ulSecletor){
      console.error(`Elemento <ul> não encontrado."`)
    }
    const fragment = document.createDocumentFragment()

    nomes.forEach(item => {
        const li = document.createElement("li")
        li.textContent = item
        fragment.appendChild(li)
    })

    ulSecletor.appendChild(fragment)
  }

  criarLista(nomes, ul)