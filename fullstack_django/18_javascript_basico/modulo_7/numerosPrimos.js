function isPrime(n){
    let result = "é primo"
    if (n <= 1) {
        result =  "não é primo"
        return `${n} -> ${result}`
    }

    for(let i = 2; i < n; i++){
        if(n % i === 0){
            result = "não é primo"
            break
        }
    }

    return `${n} -> ${result}`
}

// console.log(isPrime(7))  // 7 -> é primo
// console.log(isPrime(10)) // 10 -> não é primo
// console.log(isPrime(1))  // 1 -> não é primo
// console.log(isPrime(2))  // 2 -> é primo

for(let i = 1; i <= 100; i++){
    console.log(isPrime(i))
}