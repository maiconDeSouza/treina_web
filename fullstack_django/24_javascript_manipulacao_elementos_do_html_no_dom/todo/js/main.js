import {
    retrievingTasks, 
    saveList, 
    generateTaskObject, 
    createList, 
    editTask, 
    saveEditToList,
    deleteTask,
} from './utils.js'

const toDoList = retrievingTasks()
const buttonToAddTasks = document.querySelector('#add')
const ul = document.querySelector('ul')


buttonToAddTasks.addEventListener('click', e => {
    const taskText = document.querySelector('#input-task')
  
    if(!taskText) return 

    const task = generateTaskObject(taskText.value)
    toDoList.push(task)
    createList(toDoList)
    taskText.value = ''
    saveList(toDoList)
})

ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI') return e.target.classList.toggle('completed')

    if(e.target.classList[1] === 'bi-pencil') return editTask(e.target.closest("li"))
    
    if(e.target.classList[0] === 'button-edit'){
        const input = document.querySelector('.input-edit')
        const li = e.target.closest("li")
        const text = input.value
        const key = li.getAttribute('key')
        const newToDoList = saveEditToList(toDoList, text, key)
        createList(newToDoList)
        saveList(newToDoList)
        return
    }

    if(e.target.classList[1] === 'bi-trash'){
        const li = e.target.closest("li")
        const key = li.getAttribute('key')
        const newToDoList = deleteTask(toDoList, key)
        createList(newToDoList)
        saveList(newToDoList)
        return
    }
    
})

function init(){
    createList(toDoList)
}

init()
