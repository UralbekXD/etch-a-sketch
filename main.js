const BOARD_SIZE = 640;


let board = document.querySelector(".board");
let clearButton = document.querySelector("#clear");

let sizeController = document.querySelector("#size");
let sizeLabel = document.querySelector("#size-label");

let randomizeColorButton = document.querySelector("#randomize-color");
let currColor = "black";

let currSize = 16;
let cellSize = BOARD_SIZE / currSize;
let isMouseDown = false;


const drawGrid = (size) => {
    for (let i= 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.classList.add("cell");
        board.append(cell);

        cell.addEventListener("mouseover", paintCell);
        cell.addEventListener("mousedown", paintCell);
    }
}

const clearGrid = () => {
    for (let cell of board.children) {
        if (cell.style.backgroundColor !== "white") {
            cell.style.backgroundColor = "white";
        }
    }
}

const resizeGrid = (e) => {
    currSize = e.target.value;
    cellSize = BOARD_SIZE / currSize;

    clearGrid(board);

    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }

    drawGrid(currSize);
}

const changeLabel = (e) => {
    sizeLabel.textContent = `${e.target.value}x${e.target.value}`;
}

const changeColor = () => {
    let isRandomizeColor = randomizeColorButton.checked;
    if (isRandomizeColor) {
        currColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    } else {
        currColor = "black";
    }
}

const paintCell = (e) => {
    if (e.type === "mouseover" && isMouseDown) {
        changeColor();
        e.target.style.backgroundColor = currColor;
    }
}

const getRandomColor = () => {
    return Math.floor(Math.random() * 256);
}

const init = () => {
    // Set width and height of container
    board.style.width = `${BOARD_SIZE}px`;
    board.style.height = `${BOARD_SIZE}px`;

    document.body.onmousedown = () => {isMouseDown = true};
    document.body.onmouseup = () => {isMouseDown = false};

    drawGrid(currSize);

    clearButton.addEventListener("click", clearGrid);
    sizeController.addEventListener("input", changeLabel);
    sizeController.addEventListener("change", resizeGrid);
};

init();
