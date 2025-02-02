/*
<div class="draggable" draggable="true"></div>
<div class="dropzone"></div>
*/

const draggable = document.querySelector('#draggable')
const dropzone = document.querySelector('#dropzone')

draggable.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text', e.target.id)
})

dropzone.addEventListener('dragover', e => {
    e.preventDefault() // Permite o drop
})

dropzone.addEventListener('drop', e => {
    e.preventDefault()
    
    const draggedElement = document.getElementById(e.dataTransfer.getData('text'))
    dropzone.classList.toggle('add')
    dropzone.appendChild(draggedElement)
})