export function gerenateObjValue(){
    const amount = Number(document.querySelector('#amount-input').value)
    const meats = Number(document.querySelector('#meats').value)
    const chicken = Number(document.querySelector('#chicken').value)
    const pork = Number(document.querySelector('#pork').value)
    const softDrinks = Number(document.querySelector('#soft-drinks').value)
    const beer = Number(document.querySelector('#beer').value)
    const peopleWhoDrink = Number(document.querySelector('people-who-drink').value)

    return {
        amount,
        meats,
        chicken,
        pork,
        softDrinks,
        beer,
        peopleWhoDrink
    }
}