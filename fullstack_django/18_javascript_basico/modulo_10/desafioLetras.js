function missingLetters(text){
    const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz")
    const textLower = text.toLowerCase()

    const result = alphabet.filter(item => !textLower.includes(item))

    console.log(result)
}

missingLetters("the quick brown fox jumps over the lazy dog")
missingLetters("hello world")
missingLetters("12345!@#$$%^&*()")