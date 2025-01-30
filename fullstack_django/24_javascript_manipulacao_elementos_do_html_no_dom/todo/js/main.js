import {
    retrievingTasks, 
    saveList, 
    generateTaskObject,
    completedTask, 
    createList, 
    editTask, 
    saveEditToList,
    deleteTask,
} from './utils.js'

const buttonToAddTasks = document.querySelector('#add')
const ul = document.querySelector('ul')


buttonToAddTasks.addEventListener('click', e => {
    const toDoList = retrievingTasks()
    const taskText = document.querySelector('#input-task')
  
    if(!taskText.value.trim()) return 

    const task = generateTaskObject(taskText.value)
    toDoList.push(task)
    saveList(toDoList)
    createList(toDoList)
    taskText.value = ''
})

ul.addEventListener('click', e => {
    const toDoList = retrievingTasks()
    const li = e.target.closest('li')
    if (!li) return

    if(e.target.tagName === 'LI'){
        const key = e.target.getAttribute('key')
        const newToDoList = completedTask(toDoList, key)
        saveList(newToDoList)
        createList(newToDoList)
    }

    if(e.target.classList[1] === 'bi-pencil') return editTask(e.target.closest("li"))
    
    if(e.target.classList[0] === 'button-edit'){
        const input = document.querySelector('.input-edit')
        const li = e.target.closest("li")
        const text = input.value
        const key = li.getAttribute('key')
        const newToDoList = saveEditToList(toDoList, text, key)
        saveList(newToDoList)
        createList(newToDoList)
        return
    }

    if(e.target.classList[1] === 'bi-trash'){
        const li = e.target.closest("li")
        const key = li.getAttribute('key')
        const newToDoList = deleteTask(toDoList, key)
        saveList(newToDoList)
        createList(newToDoList)  
        return
    }
    
})

function init(){
    const toDoList = retrievingTasks()
    createList(toDoList)
}

init()
