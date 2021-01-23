console.log("Masai School");
console.log("Welcome");
console.log("");

console.log("my age" + 24);
console.log("");

var name = "Ashish Kumar Saini";
console.log("My name is" + name);

name = "Om Prakash";
console.log("My father's name is" + name);

name = "Maya Devi";
console.log("My mother's name is" + name);
console.log("");

var side = 57;
var area = side ** 2;
var perimeter = 4 * side;
console.log("Perimeter of Square:" + perimeter);
console.log("");

var a = 3,
  b = 5,
  c = 8;
console.log("Sum:" + (a + b + c));
console.log("Product:" + a * b * c);
console.log("");

var num = 89879;
var square = num ** 2;
var squareRoot = num ** 0.5;
console.log("Square:" + square);
console.log("Square Root:" + squareRoot);
console.log("");

var numOne = "353";
var numTwo = "5355";

var sum = Number(numOne) + Number(numTwo);
var product = Number(numOne) * Number(numTwo);
var difference = Number(numTwo) - Number(numOne);
console.log("Sum: " + sum);
console.log("Product: " + product);
console.log("Difference: " + difference);
console.log("");

var totalChocolates = 89878;
var totalPencils = 3545;

var leftPencils = totalPencils % 4;
var leftChocolates = totalChocolates % 4;
console.log("Left Pencils: " + leftPencils);
console.log("Left Chocolates: " + leftChocolates);
console.log("");

var rent = 6000;
var gas = 700;
var light = 500;
var food = 3000;
var travelling = 3000;

var teaching = 8000;
var job = 20000;

var total_income = teaching + job;
var expenses = rent + gas + light + food + travelling;
var totalAmountRemaining = total_income - expenses;
console.log("Total Remaining Amount: " + totalAmountRemaining);
