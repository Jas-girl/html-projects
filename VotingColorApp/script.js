let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById('green');
let yellow = document.getElementById('yellow');
let pink = document.getElementById('pink');
let black = document.getElementById('black');




let result = document.getElementById("result");
let p1 = document.getElementById("p1");
let redcount = 0; let bluecount = 0;let greencount=0;let yellowcount=0;let pinkcount=0;let blackcount=0;
red.addEventListener('click', () => {
    redcount++;
    console.log(redcount);
})
blue.addEventListener('click', () => {
    bluecount++;
    console.log(bluecount);
})
green.addEventListener('click', () => {
    greencount++;
    console.log(greencount);
})
yellow.addEventListener('click', () => {
    yellowcount++;
    console.log(yellowcount);
})
pink.addEventListener('click', () => {
    pinkcount++;
    console.log(pinkcount);
})
black.addEventListener('click', () => {
    blackcount++;
    console.log(blackcount);
})
result.addEventListener('click', () => {

    p1.innerHTML = `The red count: ${redcount} <br> The blue count: ${bluecount} <br> The green count: ${greencount} <br> The yellow count: ${yellowcount} <br> The pink count: ${pinkcount} <br> The black count: ${blackcount}
    `;

})