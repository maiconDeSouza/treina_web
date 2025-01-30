function menor(arr){
    let menor = arr[0]

    for(let prop of arr){
        if(prop < menor){
            menor = prop
        }
    }

    return `O menor valor dentro desse array é ${menor}`
}


console.log(menor([2, 7, 4, 1, 45, 3, 1, 7, 9]))
console.log(menor([45, 4, 78, 78, 78, 782, 8, 7]))