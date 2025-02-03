const file = document.querySelector('#file')
const salve = document.querySelector('#salve')

file.addEventListener('change', e => {
    const resultfile = e.target.files[0]

    const reader = new FileReader()

    reader.onload = () => {
        const content = reader.result
        document.querySelector('#text-area').value = content
    }
    
    reader.readAsText(resultfile)
})

salve.addEventListener('click', e => {
    const textareaContent = document.querySelector('#text-area').value
    const blob = new Blob([textareaContent], {
        type: 'text/plain;charset=utf-8'
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('download', 'edite-file.txt')
    a.click()
    document.querySelector('#text-area').value = ''
})