var a = 34;
var b = 3343;
console.log(a > b ? b : a);

var pass_1 = "asdifjasfja";
var pass_2 = "dafjaoifje";
console.log(pass_1 !== pass_2 && "Wrong Password");

var num = 349595;
console.log(num % 2 && "Odd Number");

var birth_year = 1994;
var current_year = 2021;
var age = current_year - birth_year;
console.log(age >= 20 && age <= 29 && "Twenties");

var age_a = 60;
var age_b = 90;
var age_c = 35;
if (age_a > age_b && age_a > age_c) {
  console.log(age_b > age_c ? "a b c" : "a c b");
} else if (age_b > age_a && age_b > age_c) {
  console.log(age_a > age_c ? "b a c" : "b c a");
} else if (age_c > age_a && age_c > age_b) {
  console.log(age_a > age_b ? "c a b" : "c b a");
}

var num_1 = 89585;
var num_2 = 4955495;
console.log(num_1 > num_2 ? num_1 : num_2);

var day = "Monday";

switch (day) {
  case "Monday":
    console.log("Mon");
    break;
  case "Tuesday":
    console.log("Tue");
    break;
  case "Wednesday":
    console.log("Wed");
    break;
  case "Thursday":
    console.log("Thu");
    break;
  case "Friday":
    console.log("Fri");
    break;
  case "Saturday":
    console.log("Sat");
    break;
  case "Sunday":
    console.log("Sun");
    break;
  default:
    console.log("Day");
}
