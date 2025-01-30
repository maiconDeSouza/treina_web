const infoGame = {
    board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ],
    round: 0,
    player: "O",
    inPlay: true,
    winner: ""
}

const resetInfoGame = {...infoGame}

const table = document.querySelector("table")
const p = document.querySelector("p")
const button = document.querySelector("button")

function render({ board, round, player, inPlay, winner }) {
    table.textContent = ""
    board.forEach((line, lineIndex) => {
        const tr = document.createElement("tr")
        line.forEach((item, itemIndex) => {
            const td = document.createElement("td")
            td.textContent = item
            td.setAttribute("line", lineIndex)
            td.setAttribute("item", itemIndex)
            tr.appendChild(td)
        })
        table.appendChild(tr)
    })

    if (winner) {
        p.textContent = `Vencedor: ${winner}! Rodadas: ${round}`
    } else if (round >= 9) {
        p.textContent = "DEU VELHA!"
    } else {
        p.textContent = `Rodada: ${round} | Próximo: ${player}`
    }
}

function checkWinner(board) {
    const winningPatterns = [
        // Linhas
        [ [0, 0], [0, 1], [0, 2] ],
        [ [1, 0], [1, 1], [1, 2] ],
        [ [2, 0], [2, 1], [2, 2] ],
        // Colunas
        [ [0, 0], [1, 0], [2, 0] ],
        [ [0, 1], [1, 1], [2, 1] ],
        [ [0, 2], [1, 2], [2, 2] ],
        // Diagonais
        [ [0, 0], [1, 1], [2, 2] ],
        [ [0, 2], [1, 1], [2, 0] ]
    ]

    for (let pattern of winningPatterns) {
        const [a, b, c] = pattern
        if (
            board[a[0]][a[1]] &&
            board[a[0]][a[1]] === board[b[0]][b[1]] &&
            board[a[0]][a[1]] === board[c[0]][c[1]]
        ) {
            return board[a[0]][a[1]]
        }
    }
    return null
}

table.addEventListener("click", (e) => {
    if (e.target.tagName === "TD") {
        const line = e.target.getAttribute("line")
        const item = e.target.getAttribute("item")

        if (infoGame.board[line][item] === "" && infoGame.inPlay) {
            infoGame.board[line][item] = infoGame.player
            infoGame.player = infoGame.player === "O" ? "X" : "O"
            infoGame.round += 1

            const winner = checkWinner(infoGame.board)
            if (winner) {
                infoGame.winner = winner
                infoGame.inPlay = false
            }

            render(infoGame)
        }
    }
})

button.addEventListener("click", e => {
    infoGame["board"] = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]
    infoGame["round"] = 0
    infoGame["player"] = "O"
    infoGame["inPlay"] = true
    infoGame["winner"] = ""
    render(infoGame)
})

render(infoGame)


