let i = 1
let line = ''

while(i <= 10){
    for(let x = 0; x < i; x++){
        line += '*'
    }
    console.log(line)
    line = ''
    i++
}

i = 10
while(i > 0){
    for(let x = 0; x < i; x++){
        line += '*'
    }
    console.log(line)
    line = ''
    i--
}