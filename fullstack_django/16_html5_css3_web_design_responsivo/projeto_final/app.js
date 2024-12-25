const buttonMobile = document.querySelector('.button-mobile')
const lista = document.querySelector('.lista-menu')

buttonMobile.addEventListener('click', e => {
    e.preventDefault()
    lista.classList.toggle('scale')
    buttonMobile.classList.toggle('active')
})