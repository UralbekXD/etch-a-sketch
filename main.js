const BOARD_SIZE = 500;
const GRID_SIZE = Object.freeze({
    Small: 8,
    Medium: 16,
    Large: 32,
    ExtraLarge: 64,
});


let board = document.querySelector(".board");
let cellSize = BOARD_SIZE / GRID_SIZE.Small;

const drawGrid = (size) => {
    for (let i= 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        board.append(cell);
    }
}

const clearGrid = (board) => {
    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }
}

const init = () => {
    // Set width and height of container
    board.style.width = `${BOARD_SIZE}px`;
    board.style.height = `${BOARD_SIZE}px`;

    drawGrid(GRID_SIZE.Small);
};

init();
