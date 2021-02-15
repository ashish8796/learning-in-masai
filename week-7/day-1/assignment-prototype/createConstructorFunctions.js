function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function () {
  var perimeter = this.sides * this.sideLength;
  console.log(perimeter);
};

var square = new Shape("square", 4, 5);

square.calcPerimeter();

var triangle = new Shape("triangle", 3, 3);

triangle.calcPerimeter();
