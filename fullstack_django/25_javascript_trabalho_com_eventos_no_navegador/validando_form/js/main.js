import {
    checkFullname,
    checkCPF,
    checkEmail,
    checkPhone,
    checkPassword
} from './ validators.js'
const form = document.querySelector('form')
const cpf = form.querySelector('#cpf')
const phone = form.querySelector('#phone')




form.addEventListener('submit', e => {
    e.preventDefault()
    const validations = []
    
   validations.push(checkFullname())
   validations.push(checkCPF())
   validations.push(checkEmail())
   validations.push(checkPhone())
   validations.push(checkPassword())
   
   
   const submit = validations.every(v => v === true)

   if(submit){
    form.submit()
   }
    
})

cpf.addEventListener('input', e => {
    let value = e.target.value

    value = value.replace(/\D/g, "")

    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

    e.target.value = value
})

phone.addEventListener('input', e => {
    let value = e.target.value

    value = value.replace(/\D/g, '')
    value = value.replace(/^(\d{2})(\d)/, '($1) $2')
    value = value.replace(/(\d{5})(\d)/, '$1-$2')
    value = value.slice(0, 15)

    e.target.value = value
})