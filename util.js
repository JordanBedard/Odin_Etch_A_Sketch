let colorArray = ["Red", "SpringGreen", "DeepSkyBlue", "Aquamarine", "Yellow", "Cyan", "Purple", "OrangeRed"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomColor() {
    let randomNumberColor = getRandomInt(8);
    let cellColor = colorArray[randomNumberColor];
    return cellColor;
}