const text = `
treinaweb é legal
eu gosto da treinaweb
Treinaweb
`

const regex1 = /treinaweb/g
const result1 = regex1.test(text)
console.log(result1) // true -> a pesquisa feita foi se tem treinaweb no texto

const regex2 = /dante/g
const result2 = regex2.test(text)
console.log(result2) // false -> se tem dante no texto

const regex3 = /^legal/
const result3 = regex3.test(text)
console.log(result3) // flase -> tem legal, mas não no começo do texto. ^para informar que é no inicio
