import {
    gerenateListValues,
    setMessageError,
    calcule
} from './utils.js'

import {
    checkValidations
} from './ validation.js'

const buttonCalc = document.querySelector('.calc')
const input = document.querySelectorAll('input.real')

buttonCalc.addEventListener('click', e => {
    const values = gerenateListValues()

    const validations = checkValidations(values)

    const errors = validations.find(item => item.error === true)


    if(errors){
        setMessageError(errors.message)
        return
    }
    
    const result = calcule(values)
    console.log(result)
})

input.forEach(input => {
    input.addEventListener('input', e => {
        let value = e.target.value

        value = value.replace(/\D/g, '');

        value = (parseFloat(value) / 100).toFixed(2)

        e.target.value = value.replace('.', ',')
    })
})