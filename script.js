// Initialize Grid Size to Normal
let gridSizeNormal = true;
let gridSizeInitial = gridSwitch();
gridDisplay(gridSizeInitial.column, gridSizeInitial.row, gridSizeInitial.cellClass);

// Click Size Button and Click Size Button Handle
let sizeButton = document.querySelector(".buttonSize")
sizeButton.addEventListener("click", function () {
    handleSizeButton();
});

function handleSizeButton() {
    rotateButton(".buttonSize");
    let gridSize = gridSwitch();
    gridDisplay(gridSize.column, gridSize.row, gridSize.cellClass);
}

// Function to switch between different Grid Sizes
function gridSwitch() {
    let gridSize = {};
    if (gridSizeNormal) {
        gridSize.column = 32;
        gridSize.row = 32;
        gridSize.cellClass = "cellsRegular";
    } else {
        gridSize.column = 64;
        gridSize.row = 64;
        gridSize.cellClass = "cellsLarge";
    }
    gridSizeNormal = !gridSizeNormal;
    return gridSize;
}

// Click Color Button
let colorButton = document.querySelector(".buttonColor")
colorButton.addEventListener("click", function () {
    handleColorButton();
});

function handleColorButton() {
    rotateButton(".buttonColor");
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
function gridDisplay(column, row, className) {
    // Target DOM Element
    let gridContainer = document.querySelector(".grid");
    gridContainer.innerHTML = '';
    gridContainer.className = "grid";
    // Create Div
    for (let i = 0; i < column; i++) {
        let gridColumn = document.createElement("div");
        gridColumn.className = "gridColumn";
        for (let j = 0; j < row; j++) {
            let cells = document.createElement("div");
            cells.classList = className;
            gridColumn.appendChild(cells);
        }
        gridContainer.appendChild(gridColumn);
    }
}

// Function Change Color of Grid Cells

// // Parameters - class Name // Color?
// function changeCellColor() {
//     let regularCellColor = document.querySelector(".cellsRegular");

// }

// Color change -> Array with colors + random math for choosing key -> passing value in function when click cell

// When Erase Clicked -> Change class -> Cell Background-Color = #CECEC