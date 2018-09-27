


const canvas = document.querySelector("canvas");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

c.fillStyle = "red";
c.fillRect(400, 250, 100, 100);
c.fillRect(400, 400, 100, 100);
c.fillRect(400, 550, 100, 100);
c.fillRect(200, 250, 100, 100);
c.fillRect(200, 400, 100, 100);
c.fillRect(200, 550, 100, 100);



// Static functionality
// const x = Math.random() * innerWidth;
// const y = Math.random() * innerHeight;
// let dx = (Math.random() - 0.5) * 14;
// let dy = (Math.random() - 0.5) * 14;
// let radius = 30;

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
        c.fillStyle = "pink";
        c.fill();
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerWidth || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        x += this.dx;
        y += this.dy;

        this.draw();
    }

}

// store all our circles
const circleArray = [];

for (let i = 0; i < 20; i++) {
    let radius = 30;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 8;
    let dy = (Math.random() - 0.5) * 8;

    circleArray.push(new Circle(x, y, dx, dy, radius));
}

// Static functionality
// const x = Math.random() * innerWidth;
// const y = Math.random() * innerHeight;
// let dx = (Math.random() - 0.5) * 14;
// let dy = (Math.random() - 0.5) * 14;
// let radius = 30;
// let circle = new Circle(200, 200, 3, 3, 30);

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight
    );

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

    // circle.update();
    // console.log("hello");
    // c.beginPath();
    // c.arc(x, y, 30, 0, Math.PI * 2, false);
    // c.strokeStyle = "blue";
    // c.stroke();


}

animate();