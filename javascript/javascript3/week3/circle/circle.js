const canvas = document.getElementById("circle-canvas");
canvas.width = 400;
canvas.height = 600;
const context = canvas.getContext("2d");

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

const circle1 = new Circle(150, 150, 120, 0, 2 * Math.PI, "#156044");
const circle2 = new Circle(150, 50, 50, 0, 2 * Math.PI, "red");
const circle3 = new Circle(100, 100, 60, 0, 2 * Math.PI, "blue");

circle1.draw();
circle2.draw();
circle3.draw();
