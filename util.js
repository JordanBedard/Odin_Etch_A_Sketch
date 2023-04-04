let colorArray = ["aqua", "springgreen", "cyan", "chartreuse", "yellow", "magenta", "orangered", "deeppink"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomColor() {
    let randomNumberColor = getRandomInt(8);
    let cellColor = colorArray[randomNumberColor];
    return cellColor;
}