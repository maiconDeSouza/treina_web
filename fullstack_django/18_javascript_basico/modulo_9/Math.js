console.log(Math.abs(5.32)) // 5.32 -> ele pega o valor absoluto 
console.log(Math.abs(-5.32)) // 5.32 -> ele pega o valor absoluto 

console.log(Math.ceil(6.1)) //7 -> sempre vai arredondar para cima
console.log(Math.floor(6.1)) //6 -> sempre arredonda para baixo
console.log(Math.round(6.1)) //6 -> arredonda para o mais proxímo (1-4) para baixo
console.log(Math.round(6.5)) //7 -> arredonda para o mais proxímo (5-9) para cima

console.log(Math.trunc(11.32)) //6 -> Aqui ele sempre vai pegar a parte inteira do número

//Fazendo um teste com Math.max() e Math.min()
// Exercicio de pegar o segundo maior e segundo menor número de array dos modulos anterioes
//fiz com max e min métodos do obj Math
//Mas a forma mais facil de fazer isso é ordenando o arry e pegando o segundo item da lista arr[1]
function segundoMaiorSegundoMenor(arr){
    const maior = Math.max(...arr)
    const menor = Math.min(...arr)

    const arrMaior = arr.filter(item => item !== maior)
    const arrMenor = arr.filter(item => item !== menor)

    const segundoMaior = Math.max(...arrMaior)
    const segundoMenor = Math.min(...arrMenor)

    return `O array ${arr} tem como seu segundo maior número ${segundoMaior} e com seu segundo menor número ${segundoMenor}`

}

const result = segundoMaiorSegundoMenor([2, 18, 5, 1, 3, 12])

console.log(result)