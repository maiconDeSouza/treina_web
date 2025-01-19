const mensagensAleatorias = [
    "A persistência é o caminho do êxito.",
    "Acredite em si mesmo e tudo será possível.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Não espere por oportunidades, crie-as.",
    "Você é mais forte do que imagina.",
    "Aprenda com os erros e siga em frente.",
    "Grandes realizações exigem tempo e paciência.",
    "A determinação é o combustível do progresso.",
    "Não desista, o começo é sempre o mais difícil.",
    "Cada dia é uma nova chance para fazer algo incrível."
]

 

function geradorDeMensagensAleatorias(){
    const tamanhoArray = mensagensAleatorias.length
    const numeroAleatorio = Math.trunc(Math.random() * tamanhoArray)
    const result = mensagensAleatorias[numeroAleatorio]

    return result
}