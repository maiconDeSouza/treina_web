export function retrievingTasks(){
    const toDoList = JSON.parse(localStorage.getItem('mcnTasks') || "[]")
    return toDoList
    
}

export function saveList(toDoList){
    localStorage.setItem('mcnTasks', JSON.stringify(toDoList))
}

const generateId = () => `mcn-${Date.now()}-${Math.floor(Math.random() * 1000)}`

export function generateTaskObject(text){
    return {
        key: generateId(),
        task: text.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
        completed: false
    }
}

function createLI(TaskName, completed){
    const li = document.createElement('li')
    const span = document.createElement('span')
    const textTask = document.createTextNode(TaskName)

    const buttonEditing = document.createElement('button')
    const iEditing = document.createElement('i')
    iEditing.classList.add('bi', 'bi-pencil')
    buttonEditing.setAttribute('type', 'button')
    buttonEditing.setAttribute('title', 'editar task')
    buttonEditing.setAttribute('aria-label', 'Editar tarefa')
    buttonEditing.appendChild(iEditing)

    const buttonDelete = document.createElement('button')
    const iDelete = document.createElement('i')
    iDelete.classList.add('bi', 'bi-trash')
    buttonDelete.setAttribute('type', 'button')
    buttonDelete.setAttribute('title', 'apagar task')
    buttonDelete.setAttribute('aria-label', 'Excluir tarefa')
    buttonDelete.appendChild(iDelete)

    span.appendChild(textTask)
    li.appendChild(span)
    li.appendChild(buttonEditing)
    li.appendChild(buttonDelete)

    if(completed){
        li.classList.add('completed')
    }

    return li
}

export function createList(toDoList){
    const ul = document.querySelector('.task-list ul')
    ul.textContent = ''
    const frag = document.createDocumentFragment()
    toDoList.forEach(item => {
        const li = createLI(item.task, item.completed)
        li.setAttribute('key', item.key)
        frag.appendChild(li)
    })
    ul.appendChild(frag)
}

export function completedTask(toDoList, key){
    const newToDoList = toDoList.map(item => {
        if(item['key'] === key){
            item['completed'] = !item['completed']
            return item
        }
        return item
    })

    return newToDoList
}

export function editTask(li){
    const inputEditing = document.createElement('input')
       const buttonSalve = document.createElement('button')
       const textSalve = document.createTextNode('Salvar')
       inputEditing.value = li.textContent
       inputEditing.setAttribute('type', 'text')
       inputEditing.classList.add('input-edit')
       buttonSalve.appendChild(textSalve)
       buttonSalve.classList.add('button-edit')
       li.classList = ''
       li.classList.add('editing')
       li.textContent = ''
       li.appendChild(inputEditing)
       li.appendChild(buttonSalve)
}

export function saveEditToList(toDoList, text, key){
    const newToDoList = toDoList.map(item => {
        if(item['key'] === key){
            item['task'] = text
            return item
        }
        return item
    })

    return newToDoList
}

export function deleteTask(toDoList, key){
    const newToDoList = toDoList.filter(item => item['key'] !== key)
    return newToDoList
}

