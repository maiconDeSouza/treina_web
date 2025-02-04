import {
    gerenateMessageError
} from './utils.js'


function checkNumber(arrayValues){
    for(let item of arrayValues){
        if(!Number.isFinite(item['value'])){
            const message = `O campo ${item['description']} de ver um número`
            const error = gerenateMessageError(true, message)
            return error
        }
    }
    const error = gerenateMessageError()
    return error
}


function checkPositiveOrNegative(arrayValues){
    for(let item of arrayValues){
        if(item['value'] < 0){
            const message = `O campo ${item['description']} deve ter valor positivo`
            const error = gerenateMessageError(true, message)
            return error
        }
    }

    const error = gerenateMessageError()
    return error
}

function checkRequired(arrayValues){
    const amount = arrayValues[0]
    const meats = arrayValues[1]
    const softDrinks = arrayValues[4]

    const checkArray = [amount, meats, softDrinks]

    for(let item of checkArray){
        if(item['value'] <= 0){
            const message = `O campo ${item['description']} você precisa informar um valor`
            const error = gerenateMessageError(true, message)
            return error
        }
    }
    const error = gerenateMessageError()
    return error
}

export function checkValidations(arrayValues){
    const arrayErrors = []

    arrayErrors.push(checkNumber(arrayValues))
    arrayErrors.push(checkPositiveOrNegative(arrayValues))
    arrayErrors.push(checkRequired(arrayValues))
    return arrayErrors
}