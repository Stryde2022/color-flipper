const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let hexCore = "#";
    for (let i = 0; i < 6; i++){
        hexCore += hex[getRandomNumber()];
        console.log(hexCore);
    }

    document.body.style.backgroundColor = hexCore;
    color.textContent = hexCore;
});

// Generate number from 0 - 15 
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}