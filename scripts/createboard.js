const RIGHT = 2;
const LEFT = 0;

const COLORS = ["blue", "green", "red", "navy", "maroon", "teal", "black", "gray"];

function addParagraph(text, parent) {
    p = document.createElement("p");
    p.innerText = text;
    p.style.color = (COLORS[text - 1]);
    parent.appendChild(p);
}

function addMines(w, h, n) {

}

class Board {
    constructor(width, height, mines) {
        this.width = width
        this.height = height
        this.mines = mines

        const boardElement = document.getElementById("board");
        boardElement.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
        for (let i = 0; i < width * height; i++) {
            let squareElement = document.createElement("div");
            squareElement.classList.add("square");
            addParagraph(Math.ceil(Math.random() * 8), squareElement);
            squareElement.addEventListener("mousedown", event => {
                if (event.button == RIGHT) {
                    squareElement.classList.add("flag");
                } else if (event.button == LEFT) {
                    squareElement.classList.add("opened");
                }
            });
            boardElement.appendChild(squareElement);
        }
    }
}

function createBoard(width, height, mines) {
    console.log("creating board...");
    const myBoard = new Board(width, height, mines);
    console.log("board creation completed.");
}