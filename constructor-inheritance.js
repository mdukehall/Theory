/*
Example of consutrctor inheritance
*/

function Rectangle(length, width) {
	this.length = length;
	this.width = width;
}

Rectangle.prototype.getArea = function() {
	return this.length * this.width;
};

Rectangle.prototype.toString = function() {
	return "[Rectangle " + this.length + "x" + this.width + "]";
};

//Inherits from Rectangle
function Square(size) {
	this.length = size;
	this.width = size;
}

Square.prototype = new Rectangle();
Square.prototype.consutrctor = Square;

Square.prototype.toString = function() {
	return "[Square " +this.length + "x" this.width +"]";
};

var rect = new Rectangle(5,10);
var square = new Square(6);
console.log(rect.getArea());
console.log(square.getArea());

console.log(rect.toString());
console.log(square.toString());

console.log(rect instanceof Square);
console.log(rect instanceof Object);
console.log(square instanceof Square);
console.log(square instanceof Rectangle);
console.log(square instanceof Object);