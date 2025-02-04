export function gerenateListValues(){
    const amount = {
        value: Number(document.querySelector('#amount-input').value),
        description: `'Quantidade de pessoas que vão participar do churrasco'`
    }
    const meats = {
        value: Number(document.querySelector('#meats').value),
        description: `'preço do quilo da carne bovina'`
    }
    const chicken = {
        value: Number(document.querySelector('#chicken').value),
        description: `'preço do quilo da carne de frango'`
    }
    const pork = {
        value: Number(document.querySelector('#pork').value),
        description: `'preço preço do quilo da carne suina'`
    }
    const softDrinks = {
        value: Number(document.querySelector('#soft-drinks').value),
        description: `'preço do litro do refrigerante'`
    }
    const beer = {
        value: Number(document.querySelector('#beer').value),
        description: `preço da lata (355ml) de cerveja'`
    }
    const peopleWhoDrink = {
        value: Number(document.querySelector('#people-who-drink').value),
        description: `'quantas pessoas do churrasco bebem cerveja'`
    }

    const listValues = [amount, meats, chicken, pork, softDrinks, beer, peopleWhoDrink]

    return listValues
}

export function gerenateMessageError(error=false, message=''){
    return {
        error,
        message
    }
}

export function setMessageError(message){
    const p = document.querySelector('div.error p')
    p.textContent = ''
    const text = document.createTextNode(message)
    p.appendChild(text)
}

export function calcule(arrayValues){
    const weightPerPersonMeats = 0.200
    const weightPerPersonChicken = 0.150
    const weightPerPersonPork = 0.150
    const litersPerPersonSoftDrinks = 0.500
    const cansPerPersonBeer = 3

    const weightBuyMeats = arrayValues[0] * weightPerPersonMeats
    const weightBuyChicken = arrayValues[0] * weightPerPersonChicken
    const weightBuyPork = arrayValues[0] * weightPerPersonPork
    const literstBuySoftDrinks = arrayValues[0] * litersPerPersonSoftDrinks
    const cansBuyBeer = arrayValues[0] * cansPerPersonBeer
}