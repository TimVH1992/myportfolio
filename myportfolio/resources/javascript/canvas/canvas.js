// variable declarations to link canvas to js
const canvasA = document.getElementById("A");
const canvasB = document.getElementById("B");
const canvasC = document.getElementById("C");
const canvasD = document.getElementById("D");

// preventing blurry lines

//variable declarations to be able to draw on canvas
const a = canvasA.getContext('2d');
const b = canvasB.getContext('2d');
const c = canvasC.getContext('2d');
const d = canvasD.getContext('2d');

///////////// canvasA /////////////////
//drawing a square in canvas a
a.fillStyle = ("#4a1e11");
a.fillRect(90, 130, 100, 20);
a.fillRect(110, 110, 80, 20);
a.fillRect(130, 90, 60, 20);
a.fillRect(150, 70, 40, 20);
a.fillRect(170, 50, 20, 20)

// flag
a.fillRect(240, 80, 20, 10)
//drawying a line in canvas a

a.beginPath();
a.moveTo(240, 150);
a.lineTo(240, 80);
a.stroke();

///////////// canvasB /////////////////
//random circles
for(let i = 0; i < 50; i++) {
    let x = Math.random() * 300;
    let y = Math.random() * 150;
    const colorArr = ["red", "blue", "yellow", "green", "black", "purple", "pink"];
    let colorI = Math.floor(Math.random() * 7);
    const randomColor = colorArr[colorI];

b.strokeStyle = randomColor;
b.beginPath();
b.arc(x, y, 10, 0, 2 * Math.PI, false);
b.stroke();
}

///////////// canvasC /////////////////
for(let i = 0; i < 100; i++){
    let x = Math.random() * 300;
    let y = Math.random() * 150;
    const colorArr = ["red", "blue", "yellow", "green", "black", "purple", "pink"];
    let colorI = Math.floor(Math.random() * 7);
    const randomColor = colorArr[colorI];

    c.fillStyle = randomColor;
    c.fillRect(x, y, 10, 10);
}

///////////// canvasD /////////////////

let x = 100;
let y = 50;
const radius = 10;
let dx = 1;
let dy = 1;

function animate() {
    requestAnimationFrame(animate);
    d.clearRect(0, 0, innerWidth, innerHeight);
    
    d.beginPath();
d.arc(x, y, radius, 0, Math.PI * 2, false);
d.strokeStyle = "red";
d.fillStyle = "yellow";
d.fill();
d.lineWidth = 1;
d.stroke();

if(x + radius > 300 || x + radius < 0) {
    dx = -dx;
}
x += dx;

if(y + radius > 150 || y - radius < 0) {
    y += -dy;
}
y += dy;

}
animate();