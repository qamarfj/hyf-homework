const artCanvas = document.getElementById("art-canvas");
artCanvas.width = window.innerWidth;
artCanvas.height = window.innerHeight;
const context = artCanvas.getContext("2d");
const startAngle = 0;
const endAngle = 2 * Math.PI;
//class
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    context.fillStyle = this.fillColor;
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    context.closePath();
    context.fill();
  }
}
// ranodm color genrator
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * 16);
    color += letters[index];
  }
  return color;
}
function getRandomRadius() {
  const Radius = Math.floor(Math.random() * 300);
  return Radius;
}

//update mouse postion after every mouse move
let posX = 50;
let posY = 50;
document.addEventListener("mousemove", (e) => {
  posX = e.clientX;
  posY = e.clientY;
});
//Every 100ms create a new circle instance and draw that to the canvas around mouse postion
setInterval(() => {
  const circle = new Circle(
    posX,
    posY,
    getRandomRadius(),
    startAngle,
    endAngle,
    getRandomColor()
  );
  circle.draw();
}, 100);
