const pessoa = {
    nome: 'Lucas',
    camisa: 7
}

for(let key in pessoa){
    console.log(`${key} -> ${pessoa[key]}`)
}

for(let [key, value] of Object.entries(pessoa)){
    console.log(`${key} = ${value}`)
}