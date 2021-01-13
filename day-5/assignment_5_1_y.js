var a = 3454653635673;
var b = 33436363;
console.log(a > b ? a : b);

var pass_1 = "asdi%^&^%^fjasfja";
var pass_2 = "asdi%^&^%^fjasfja";
pass_1 !== pass_2 && console.log("Wrong Password");
pass_1 === pass_2 && console.log("Valid Password");

var num = 3493663563763596;
console.log(num % 2 ? "Odd Number" : "Even Number");

var birth_year = 2005;
var current_year = 2021;
var age = current_year - birth_year;
age >= 20 && age <= 29 && console.log("Twenties");
age >= 13 && age <= 19 && console.log("Teenage");

var age_a = 60;
var age_b = 90;
var age_c = 35;
if (age_a > age_b && age_a > age_c) {
  console.log(age_b > age_c ? "a b c" : "a c b");
  console.log(age_b > age_c ? "c b a" : "b c a");
} else if (age_b > age_a && age_b > age_c) {
  console.log(age_a > age_c ? "b a c" : "b c a");
  console.log(age_a > age_c ? "c a b" : "a c b");
} else if (age_c > age_a && age_c > age_b) {
  console.log(age_a > age_b ? "c a b" : "c b a");
  console.log(age_a > age_b ? "b a c" : "a b c");
}

var num_1 = 86359585;
var num_2 = 49552495;
console.log(num_1 === num_2 ? "Equal" : "Different");

var month = "October";

switch (month) {
  case "January":
    console.log("Jan");
    break;
  case "February":
    console.log("Feb");
    break;
  case "March":
    console.log("Mar");
    break;
  case "April":
    console.log("Apr");
    break;
  case "May":
    console.log("May");
    break;
  case "June":
    console.log("Jun");
    break;
  case "July":
    console.log("Jul");
    break;
  case "August":
    console.log("Aug");
    break;
  case "September":
    console.log("Sep");
    break;
  case "October":
    console.log("Oct");
    break;
  case "November":
    console.log("Nov");
    break;

  default:
    console.log("Dec");
}
