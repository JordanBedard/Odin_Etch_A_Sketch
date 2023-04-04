import { getRandomColor } from "./util.js";

// Initialize Grid Size to Normal
let isNormalGridSize = true;
let gridSizeInitial = getGridSize(isNormalGridSize);

initGrid(gridSizeInitial.column, gridSizeInitial.row, gridSizeInitial.cellSize);

// Function to Initialize the Grid 
function initGrid(column, row, cellSize) {
    gridDisplay(column, row, cellSize);
    setUpEventListenersCells();
}

// Event Listener - Click Size Button - Button handle
let sizeButton = document.querySelector(".buttonSize")
sizeButton.addEventListener("click", handleSizeButton);

function handleSizeButton() {
    rotateButton();
    switchGridSize();
    let gridSize = getGridSize(isNormalGridSize);
    initGrid(gridSize.column, gridSize.row, gridSize.cellSize);
}

// Event Listener - Click Color Button - Button handle
let colorButton = document.querySelector(".buttonColor")
colorButton.addEventListener("click", handleColorButton);

let isColorGray = true;

function handleColorButton() {
    rotateColorButton();
    isColorGray = !isColorGray;
}

// Switch between different Grid Sizes
function switchGridSize() {
    isNormalGridSize = !isNormalGridSize;
}
function getGridSize(isSmall) {
    let gridSize = {};
    if (isSmall) {
        gridSize.column = 32;
        gridSize.row = 32;
        gridSize.cellSize = 18;
    } else {
        gridSize.column = 64;
        gridSize.row = 64;
        gridSize.cellSize = 8;
    }
    return gridSize;
}

// Function to Display Grid based on Size Input
function gridDisplay(column, row, cellSize) {
    // Target DOM Element
    let gridContainer = document.querySelector(".grid");
    gridContainer.innerHTML = '';
    gridContainer.className = "grid";
    // Create Div
    for (let i = 0; i < column; i++) {
        let gridColumn = document.createElement("div");
        gridColumn.className = "gridColumn";
        for (let j = 0; j < row; j++) {
            let cell = document.createElement("div");
            cell.classList = "cell";
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            gridColumn.appendChild(cell);
        }
        gridContainer.appendChild(gridColumn);
    }
}

// Function to rotate Buttons when clicked
let isSizeRotated = false;
let isColorRotated = false;

function rotateButton() {
    let buttonRotate = document.querySelector(".buttonSize");
    if (isSizeRotated) {
        buttonRotate.style.transform = "rotate(0deg)";
        isSizeRotated = false;
    } else {
        buttonRotate.style.transform = "rotate(180deg)";
        isSizeRotated = true;
    }
}

function rotateColorButton() {
    let buttonRotate = document.querySelector(".buttonColor")
    if (isColorRotated) {
        buttonRotate.style.transform = "rotate(0deg)";
        isColorRotated = false;
    } else {
        buttonRotate.style.transform = "rotate(180deg)";
        isColorRotated = true;
    }
}

// Function Set Up Event Listener to Change Background Colors
function setUpEventListenersCells() {
    let changeColorCells = document.querySelectorAll(".cell");

    changeColorCells.forEach((cell) => {
        cell.addEventListener('mouseover', changeBackgroundColors);
    });

    function changeBackgroundColors() {
        if (isColorGray === true) {
            this.style.backgroundColor = "gray"
        } else {
            let coolRandomColor = getRandomColor();
            this.style.backgroundColor = coolRandomColor;
        }
    }
}

//  Erase Button
let eraseButton = document.querySelector(".eraseControl");
eraseButton.addEventListener('click', eraseGrid);

function eraseGrid() {
    let gridSize = getGridSize(isNormalGridSize);
    initGrid(gridSize.column, gridSize.row, gridSize.cellSize);
}