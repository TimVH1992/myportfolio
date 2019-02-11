// link canvas element to html tag
const canvas = document.getElementById("canvas");

// settings for fullscreen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// install context parameter
let c = canvas.getContext('2d');

// function that creates the circle object with methods
function Circle(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        c.strokeStyle = "lightpink"
        c.stroke();
        c.fillStyle = "#776168";
        c.fill();

    }

    this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        this.x += this.dx;
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
    
        this.y += this.dy;

        this.draw();
    }
}

// array to store the circles that get created in the loop
let circleArray = [];

for(let i = 0; i < 100; i++){
    let radius = Math.random() * 80;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5);
    let dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, radius, dx, dy));
}

// clearing the screen after every single movement so we don t get full lines. + update these (draw function is a part of update method)
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(let i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();