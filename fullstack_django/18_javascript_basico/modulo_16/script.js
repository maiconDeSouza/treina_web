const form = document.querySelector("form")
const ul = document.querySelector("ul")



form.addEventListener("submit", e => {
    const task = document.querySelector("input").value
    e.preventDefault()
    const li = document.createElement("li")
    li.textContent = task
    ul.appendChild(li)
    form.reset()
})


ul.addEventListener("click", e => {
    if(e.target.tagName === 'LI'){
        e.target.remove()
    }
})

