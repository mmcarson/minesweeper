const RIGHT = 2
const LEFT = 0

const COLORS = ["blue", "green", "red", "navy", "maroon", "teal", "black", "gray"]

function addParagraph(text, parent) {
    p = document.createElement("p")
    p.innerText = text
    p.style.color = (COLORS[text - 1])
    parent.appendChild(p)
}

class Board {
    constructor(width, height, mines) {
        this.width = width
        this.height = height
        this.mines = mines
        this.addMines()

        const boardElement = document.getElementById("board")
        boardElement.style.gridTemplateColumns = `repeat(${width}, 1fr)`
        for (let i = 0; i < width * height; i++) {
            let squareElement = document.createElement("div")
            squareElement.classList.add("square")
            addParagraph(Math.ceil(Math.random() * 8), squareElement)
            squareElement.addEventListener("mousedown", event => {
                if (event.button == RIGHT) {
                    squareElement.classList.add("flag")
                } else if (event.button == LEFT) {
                    squareElement.classList.add("opened")
                }
            })
            boardElement.appendChild(squareElement)
        }

        this.boardElement = boardElement
    }

    addMines() {
        this.mineSet = new Set()
        while (this.mineSet.size < this.mines) {
            this.mineSet.add(Math.floor(Math.random() * this.width * this.height))
        }
        console.log(this.mineSet)
    }

    findIndex(x, y) {
        return y * this.width + x
    }

    findNeighbors(index) {
        const neighbors = [],
            y = Math.floor(index / this.width),
            x = index % this.width

        // for (let i=-1; i<=1; i++) {
        //     for (let j=-1; j<=1; j++) {
        //         square = index + 
        //     }
        // }
        // // left
        // neighbors.push(index - 1)
        // // right
        // neighbors.push(index + 1)
        // // above
        // neighbors.push(index - this.width)
        // // below
        // neighbors.push(index + this.width)
        // // upper left
        // neighbors.push(index - this.width - 1)
        // // upper right
        // neighbors.push(index - this.width + 1)
    }
}

function createBoard(width, height, mines) {
    console.log("creating board...")
    const myBoard = new Board(width, height, mines)
    console.log("board creation completed.")
}