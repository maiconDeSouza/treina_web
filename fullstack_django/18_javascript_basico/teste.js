function soma(x, y){
    ++y
    console.log(`${x} + ${y} = ${x + y}`)
}

for(let i = 1; i <= 100; i++){
    soma(i, i)
}