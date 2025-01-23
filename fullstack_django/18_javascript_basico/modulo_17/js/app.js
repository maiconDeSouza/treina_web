const infoGame = {
    board: [
        [
            [""], [""], [""]
        ],
        [
            [""], [""], [""]
        ],
        [
            [""], [""], [""]
        ],
    ],
    round: 0,
    play: "O",
}

const table = document.querySelector("table")
const p = document.querySelector("p")

function render({board}){
    table.textContent = ""
    board.forEach((line, lineIndex) => {
        const boardLine = document.createElement("tr")
        line.forEach((item, itemIndex)=> {
            const boradItem = document.createElement("td")
            boradItem.textContent = item
            boradItem.setAttribute("line", `${lineIndex}`)
            boradItem.setAttribute("item", `${itemIndex}`)
            boardLine.appendChild(boradItem)
        })
        table.appendChild(boardLine)
    })
    p.textContent = `Rodada: ${infoGame.round} | Vez do jogador: ${infoGame.play}`
}

function continuePlay({board}){
    let continuePlay = true
    board.forEach(line => {
        continuePlay = line.some(item => item !== "")
    })

    return continuePlay
}


table.addEventListener("click", e => {
    if(e.target.tagName === "TD"){
        const line = e.target.getAttribute("line")
        const item = e.target.getAttribute("item")
        
        
        if(infoGame.board[line][item][0] === ""){
            infoGame.board[line][item] = infoGame.play
            infoGame.play = infoGame.play === "O" ? "X" : "O"
            infoGame.round += 1
            render(infoGame)
        } 

        const weCanContinue = continuePlay(infoGame)
        if (!weCanContinue){
            p.textContent = "VELHA"
        }
    }
})

render(infoGame)