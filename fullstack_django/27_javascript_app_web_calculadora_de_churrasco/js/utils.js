function commaPerDot(value){
    const result = value.replace(',', '.')
    return result
}

export function gerenateListValues(){
    const amount = {
        value: Number(commaPerDot(document.querySelector('#amount-input').value)),
        description: `'Quantidade de pessoas que vão participar do churrasco'`
    }
    const meats = {
        value: Number(commaPerDot(document.querySelector('#meats').value)),
        description: `'preço do quilo da carne bovina'`
    }
    const chicken = {
        value: Number(commaPerDot(document.querySelector('#chicken').value)),
        description: `'preço do quilo da carne de frango'`
    }
    const pork = {
        value: Number(commaPerDot(document.querySelector('#pork').value)),
        description: `'preço preço do quilo da carne suina'`
    }
    const softDrinks = {
        value: Number(commaPerDot(document.querySelector('#soft-drinks').value)),
        description: `'preço do litro do refrigerante'`
    }
    const beer = {
        value: Number(commaPerDot(document.querySelector('#beer').value)),
        description: `preço da lata (355ml) de cerveja'`
    }
    const peopleWhoDrink = {
        value: Number(commaPerDot(document.querySelector('#people-who-drink').value)),
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

    const totalWeightMeats = arrayValues[0].value * weightPerPersonMeats
    const totalWeightChicken = arrayValues[0].value * weightPerPersonChicken
    const totalWeightPork = arrayValues[0].value * weightPerPersonPork
    const totalLitersSoftDrinks = arrayValues[0].value * litersPerPersonSoftDrinks
    const totalCansBeer = arrayValues[6].value * cansPerPersonBeer
  
    const sumMeats = arrayValues[1].value * totalWeightMeats
    const sumChicken = arrayValues[2].value * totalWeightChicken
    const sumPork = arrayValues[3].value * totalWeightPork
    const sumSoftDrinks = arrayValues[4].value * totalLitersSoftDrinks
    const sumBeer = arrayValues[5].value * totalCansBeer
    const sumTotalMeats = sumMeats + sumChicken + sumPork
    const sumTotalWeightMeats =  totalWeightMeats + totalWeightChicken + totalWeightPork
    const sumTotal = sumBeer + sumChicken + sumPork + sumSoftDrinks + sumBeer


    return {
        meats: {
            amount: totalWeightMeats,
            sum: sumMeats
        },
        chicken: {
            amount: totalWeightChicken,
            sum: sumChicken
        },
        pork: {
            amount: totalWeightPork,
            sum: sumPork
        },
        softDrinks: {
            amount: totalLitersSoftDrinks,
            sum: sumSoftDrinks
        },
        beer: {
            amount: totalCansBeer,
            sum: sumBeer
        },
        sumTotalMeats: {
            sum: sumTotalMeats,
            weight: sumTotalWeightMeats
        },
        sumTotal: {
            sum: sumTotal
        }
    }

}

function floatingPoint3Places(value){
    return value.toFixed(3)
}

function floatingPoint2Places(value){
    return value.toFixed(2)
}

export function writeResults(resultCalcule){
    const tdWeightMeats = document.querySelector('.meats tbody tr:nth-of-type(1) td:nth-of-type(2)')
    const tdSumMeats = document.querySelector('.meats tbody tr:nth-of-type(1) td:nth-of-type(3)')
    const textWeighMeats = document.createTextNode(`${floatingPoint3Places(resultCalcule['meats']['amount'])}g`)
    const textSumMeats = document.createTextNode(`R$${floatingPoint2Places(resultCalcule['meats']['sum'])}`)
    tdWeightMeats.textContent = ''
    tdWeightMeats.appendChild(textWeighMeats)
    tdSumMeats.textContent = ''
    tdSumMeats.appendChild(textSumMeats)

    const tdWeightChicken = document.querySelector('.meats tbody tr:nth-of-type(2) td:nth-of-type(2)')
    const tdSumChicken = document.querySelector('.meats tbody tr:nth-of-type(2) td:nth-of-type(3)')
    const textWeighChicken = document.createTextNode(`${floatingPoint3Places(resultCalcule['chicken']['amount'])}g`)
    const textSumChicken = document.createTextNode(`R$${floatingPoint2Places(resultCalcule['chicken']['sum'])}`)
    tdWeightChicken.textContent = ''
    tdWeightChicken.appendChild(textWeighChicken)
    tdSumChicken.textContent = ''
    tdSumChicken.appendChild(textSumChicken)


    const tdWeightPork = document.querySelector('.meats tbody tr:nth-of-type(3) td:nth-of-type(2)')
    const tdSumPork = document.querySelector('.meats tbody tr:nth-of-type(3) td:nth-of-type(3)')
    const textWeightPork = document.createTextNode(`${floatingPoint3Places(resultCalcule['pork']['amount'])}g`)
    const textSumPork = document.createTextNode(`R$${floatingPoint2Places(resultCalcule['pork']['sum'])}`)
    tdWeightPork.textContent = ''
    tdWeightPork.appendChild(textWeightPork)
    tdSumPork.textContent = ''
    tdSumPork.appendChild(textSumPork)


    const tdTotalWeightMeats = document.querySelector('.meats tbody tr:nth-of-type(4) td:nth-of-type(2)')
    const tdSumTotalMeats = document.querySelector('.meats tbody tr:nth-of-type(4) td:nth-of-type(3)')
    const textTotalWeightMeats = document.createTextNode(`${floatingPoint3Places(resultCalcule['sumTotalMeats']['weight'])}g`)
    const textSumTotalMeats = document.createTextNode(`R$${floatingPoint2Places(resultCalcule['sumTotalMeats']['sum'])}`)
    tdTotalWeightMeats.textContent = ''
    tdTotalWeightMeats.appendChild(textTotalWeightMeats)
    tdSumTotalMeats.textContent = ''
    tdSumTotalMeats.appendChild(textSumTotalMeats)

    const tdTotalLitersSoftDrinks = document.querySelector('.drinks tbody tr:nth-of-type(1) td:nth-of-type(2)')
    const tdSumLitersSoftDrinks = document.querySelector('.drinks tbody tr:nth-of-type(1) td:nth-of-type(3)')
    const textTotalLitersSoftDrinks = document.createTextNode(`${floatingPoint3Places(resultCalcule['softDrinks']['amount'])}ml`)
    const textSumLitersSoftDrinks = document.createTextNode(`R$${floatingPoint2Places(resultCalcule['softDrinks']['sum'])}`)
    tdTotalLitersSoftDrinks.textContent = ''
    tdTotalLitersSoftDrinks.appendChild(textTotalLitersSoftDrinks)
    tdSumLitersSoftDrinks.textContent = ''
    tdSumLitersSoftDrinks.appendChild(textSumLitersSoftDrinks)
}