import { getRandomColor } from "./util.js";

// Initialize Grid Size to Normal
let isNormalGridSize = true;
let gridSizeInitial = getGridSize(isNormalGridSize);

initGrid(gridSizeInitial.column, gridSizeInitial.row, gridSizeInitial.cellSize);

function initGrid(column, row, cellSize) {
    gridDisplay(column, row, cellSize);
    setUpEventListenersCells();
}

// Click Size Button and Click Size Button Handle
let sizeButton = document.querySelector(".buttonSize")
sizeButton.addEventListener("click", handleSizeButton);

function handleSizeButton() {
    rotateButton(".buttonSize");
    switchGridSize();
    let gridSize = getGridSize(isNormalGridSize);
    initGrid(gridSize.column, gridSize.row, gridSize.cellSize);
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

// Click Color Button and Click Button Handle
let colorButton = document.querySelector(".buttonColor")
colorButton.addEventListener("click", handleColorButton);

let isColorGray = true;

function handleColorButton() {
    rotateButton(".buttonColor");
    isColorGray = !isColorGray;
}

// Function to rotate Buttons when clicked
let isRotated = false;

function rotateButton(buttonSelected) {
    let buttonRotate = document.querySelector(buttonSelected)
    if (isRotated) {
        buttonRotate.style.transform = "rotate(0deg)";
        isRotated = false;
    } else {
        buttonRotate.style.transform = "rotate(180deg)";
        isRotated = true;
    }
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