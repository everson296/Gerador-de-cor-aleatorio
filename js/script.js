'use strict';

const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.getElementById('color');

const getRandomNumber = () => {
    return Math.floor(Math.random() * options.length);
}

btn.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += options[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    
});


