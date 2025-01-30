const buttonAccordion = document.querySelectorAll('.button-accordion')

buttonAccordion.forEach(element => {
    element.addEventListener('click', e => {
        element.classList.toggle('active')
    })    
})