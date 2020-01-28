const RIGHT = 2;
const LEFT = 0;

function createBoard() {
    console.log("creating board...");
    const boardElement = document.getElementById("board");
    for (let i = 0; i < 900; i++) {
        let squareElement = document.createElement("div");
        squareElement.classList.add("square");
        squareElement.addEventListener("mousedown", event => {
            if (event.button == RIGHT) {
                squareElement.classList.add("flag");
            }
        });
        boardElement.appendChild(squareElement);
    }
    console.log("board creation completed.");
}