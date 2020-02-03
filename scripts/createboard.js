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
        this.boardElement = document.getElementById("board")
        this.boardElement.style.gridTemplateColumns = `repeat(${width}, 1fr)`
        this.addMines()
    }

    showSquare(index, squareElement) {
        console.log(index)
        squareElement.classList.add("opened")
        if (this.mineSet.has(index)) {
            squareElement.classList.add("mine")
        } else {
            addParagraph(this.squares[index].value, squareElement)
        }
    }

    addMines() {
        this.mineSet = new Set()
        while (this.mineSet.size < this.mines) {
            this.mineSet.add(Math.floor(Math.random() * this.width * this.height))
        }
        console.log(this.mineSet)
        this.addNumbers()
    }

    newSquareElement() {
        let squareElement = document.createElement("div")
        squareElement.classList.add("square")
        return squareElement
    }

    addNumbers() {
        this.squares = new Array()

        for (let i = 0; i < this.width * this.height; i++) {
            this.squares[i] = { value: 0, squareElement: this.newSquareElement() }
        }
        this.mineSet.forEach((element) => {
            this.findNeighbors(element).forEach((neighbor) => this.squares[neighbor].value++)
        })
        this.squares.forEach((element, index) => {
            this.boardElement.appendChild(element.squareElement)
            element.squareElement.addEventListener("mousedown", event => {
                if (event.button == RIGHT) {
                    squareElement.classList.add("flag")
                } else if (event.button == LEFT) {
                    this.showSquare(index, element.squareElement)
                }
            })
        })
        console.log(this.squares)
    }

    findIndex(x, y) {
        return y * this.width + x
    }

    findNeighbors(index) {
        const neighbors = [],
            y = Math.floor(index / this.width),
            x = index % this.width

        console.log({ x, y })

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const currentX = x + i,
                    currentY = y + j
                console.log({ currentX, currentY })
                if (currentX >= 0 && currentY >= 0) {
                    let currentIndex = this.findIndex(currentX, currentY)
                    console.log({ currentIndex })
                    if (currentIndex != index)
                        neighbors.push(currentIndex)
                }
            }
        }
        console.log(neighbors)
        return neighbors
    }
}

function createBoard(width, height, mines) {
    console.log("creating board...")
    const myBoard = new Board(width, height, mines)
    console.log("board creation completed.")
}