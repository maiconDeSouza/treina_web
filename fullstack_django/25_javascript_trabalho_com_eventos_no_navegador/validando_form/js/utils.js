export function errorText(paragraph, text){
    paragraph.textContent = ''
    const nodeText = document.createTextNode(text)
    paragraph.appendChild(nodeText)
    paragraph.setAttribute('aria-invalid', text)
}

export function validateCPF(arrayCPF){
    if (!arrayCPF || arrayCPF.length !== 11) {
        return false
      }

      const allDigitsEqual = arrayCPF.every(digit => digit === arrayCPF[0]);
      if (allDigitsEqual) {
        return false;
      }

    const cpfWithoutTheDigit = arrayCPF.slice(0, 9)
    const digit1 = arrayCPF[9]
    const digit2 = arrayCPF[10]
    
  
    let mult1 = 10
    let mult2 = 11

    const firstSum = cpfWithoutTheDigit.reduce((acc, current) => {
        const result = current * mult1
        mult1--
        return acc += result
    }, 0)
   
    const firstModule = firstSum % 11

    const trueDigit1 = firstModule < 2 ? 0 : 11 - firstModule

    if(trueDigit1 !== digit1){
        return false
    }
    
    cpfWithoutTheDigit.push(trueDigit1)

    const secondSum = cpfWithoutTheDigit.reduce((acc, current) => {
        const result = current * mult2
        mult2--
        return acc += result
    }, 0)
  
    const secondModule = secondSum % 11

    const trueDigit2 = secondModule < 2 ? 0 : 11 - secondModule

    if(trueDigit2 !== digit2){
        return false
    }

    return true
}

