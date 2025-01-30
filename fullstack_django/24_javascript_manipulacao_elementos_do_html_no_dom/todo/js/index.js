import {generateId} from './teste.js'
console.log(generateId())
const tasks = [
    {
        key: '23',
        task: 'Task 1',
        completed: false
    },
    {
        key: 25,
        task: 'Task 2',
        completed: false
    }
]

const buttonAdd = document.querySelector('#add')
const ul = document.querySelector('ul')
const buttonEdit = document.querySelector('button-edit')

function createLI(text){
    const li = document.createElement('li')
    const span = document.createElement('span')
    const textTask = document.createTextNode(text)

    const buttonEditing = document.createElement('button')
    const iEditing = document.createElement('i')
    iEditing.classList.add('bi', 'bi-pencil')
    buttonEditing.setAttribute('type', 'button')
    buttonEditing.setAttribute('title', 'editar task')
    buttonEditing.appendChild(iEditing)

    const buttonDelete = document.createElement('button')
    const iDelete = document.createElement('i')
    iDelete.classList.add('bi', 'bi-trash')
    buttonDelete.setAttribute('type', 'button')
    buttonDelete.setAttribute('title', 'apagar task')
    buttonDelete.appendChild(iDelete)

    span.appendChild(textTask)
    li.appendChild(span)
    li.appendChild(buttonEditing)
    li.appendChild(buttonDelete)

    return li
}

function createList(){
    const ul = document.querySelector('.task-list ul')
    ul.textContent = ''
    const frag = document.createDocumentFragment()
    tasks.forEach(item => {
        const li = createLI(item.task)
        li.setAttribute('key', item.key)
        frag.appendChild(li)
    })
    ul.appendChild(frag)
}

function gerarOBJ(text){
    return {
        task: text,
        completed: false
    }
}

buttonAdd.addEventListener('click', e => {
    const taskText = document.querySelector('#input-task')

    if(!taskText){
        return
    }

    const task = gerarOBJ(taskText.value)

    tasks.push(task)
    createList()
    taskText.value = ''
})


ul.addEventListener('click', e => {
  
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('completed')
        return
    }

    if(e.target.classList[1] === 'bi-pencil'){
       const li = e.target.closest("li")
       console.log(li.value)
       const inputEditing = document.createElement('input')
       const buttonSalve = document.createElement('button')
       const textSalve = document.createTextNode('Salvar')
       inputEditing.value = li.textContent
       inputEditing.setAttribute('type', 'text')
       buttonSalve.appendChild(textSalve)
       buttonSalve.classList.add('button-edit')
       li.classList = ''
       li.classList.add('editing')
       li.textContent = ''
       li.appendChild(inputEditing)
       li.appendChild(buttonSalve)
        
    }
    
})




createList()