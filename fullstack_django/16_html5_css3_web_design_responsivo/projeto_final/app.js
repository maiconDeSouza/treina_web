const menuMobile = document.querySelector(".menu-mobile")
const listMobile = document.querySelector(".list-mobile")

menuMobile.addEventListener("click", e => {
    e.preventDefault()
    menuMobile.classList.toggle("active")
    listMobile.classList.toggle("active")
})