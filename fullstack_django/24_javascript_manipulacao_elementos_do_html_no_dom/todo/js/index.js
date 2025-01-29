const tasks = [
    {
        task: 'Task 1',
        completed: false
    },
    {
        task: 'Task 2',
        completed: false
    }
]

const buttonAdd = document.querySelector('#add')
const ul = document.querySelector('ul')

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
    }
    
})



createList()