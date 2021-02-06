console.log("inside warmup file");
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return 2 * this.radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
const circle0 = new Circle(10);
const circle1 = new Circle(50);
const circle2 = new Circle(20);
const circle3 = new Circle(110);
for (let i = 0; i < 4; i++) {
  const currentCircle = eval("circle" + i);

  console.log(`circle${i} Diameter :`, currentCircle.getDiameter());
  console.log(`circle${i} Circumference : `, currentCircle.getCircumference());
  console.log(`circle${i} Area : `, currentCircle.getArea());
}
