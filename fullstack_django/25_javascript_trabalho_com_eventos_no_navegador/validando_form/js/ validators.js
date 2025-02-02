import {
    errorText,
    validateCPF
} from './utils.js'

export function checkFullname(){
    const fullname = document.querySelector('#fullname').value
    const p = document.querySelector('.fullname p')
    const cleanNameRegex = /^[A-Za-zÀ-ÿ]+(?: [A-Za-zÀ-ÿ]+){1,5}$/
    if(!fullname.trim()){
        const text = 'Não deixe o campo nome completo vazio'
        errorText(p, text)
        return false
    }

    if(fullname.length <= 5){
        const text = 'Por favor digite seu nome completo, ele deve ter mais do que cincos letras'
        errorText(p, text)
        return false
    }

    if(!cleanNameRegex.test(fullname)){
        const text = 'No nome deve apenas haver Letras, não é permitido caracteres especiais e números'
        errorText(p, text)
        return false
    }

    errorText(p, '')
    return true
}

export function checkCPF(){
    const cpf = document.querySelector('#cpf').value
    const p = document.querySelector('.cpf p')
    const clearCPF = cpf.replace(/\D/g, '').split('').map(n => Number(n))
    
    const isValid = validateCPF(clearCPF)
 
    if(!isValid){
        const text = `CPF inválido`
        errorText(p, text)
        return false
    }

    errorText(p, '')
    return true
}

export function checkEmail(){
    const email = document.querySelector('#email').value
    const p = document.querySelector('.email p')
    const validateEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(!validateEmailRegex.test(email)){
        const text = 'email inválido'
        errorText(p, text)
        return false
    }

    errorText(p, '')
    return true
}

export function checkPhone(){
    const phone = document.querySelector('#phone').value
    const p = document.querySelector('.phone p')

    if(phone.length < 15){
        const text = 'Celular inválido'
        errorText(p, text)
        return false
    }
    
    errorText(p, '')
    return true
}

export function checkPassword(){
    const password = document.querySelector('#password').value
    const pPassword = document.querySelector('.password p')
    
    const confirmPassword = document.querySelector('#confirm-password').value
    const pConfirmPassword = document.querySelector('.confirm-password p')

    const numbersSpecialCharacters = /^(?=.*\d)(?=.*[\W_]).{5,}$/

    if(password.length < 5 || password.length > 30){
        const text = 'A senha deve ter de 5 a 30 caracteres'
        errorText(pPassword, text)
        return false
    }

    if(!numbersSpecialCharacters.test(password)){
        const text = 'Na senha é obrigatório usar pelo menos um número ou um caracter especial'
        errorText(pPassword, text)
        return false
    }

    if(password !== confirmPassword){
        const text = 'As duas senhas devem ser iguais'
        errorText(pConfirmPassword, text)
        return false
    }

    errorText(pConfirmPassword, '')
    errorText(pPassword, '')
    return true
}