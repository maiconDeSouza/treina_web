import {
    gerenateObjValue
} from './utils.js'

const buttonCalc = document.querySelector('.calc')

buttonCalc.addEventListener('click', e => {
    const values = gerenateObjValue()
})