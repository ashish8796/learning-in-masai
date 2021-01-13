// Given a number using a while loop print if its a Prime Number or Not
// Screenshot of the output for the numbers 7, 16, 41, 64

var num_1 = 7;
var x_1 = 2;
while (x_1 < num_1) {
  if (num_1 % x_1 === 0) {
    console.log("It is not a prime number");
    break;
  } else {
    if (x_1 + 1 === num_1) {
      console.log("It is a prime number");
      break;
    } else {
      x_1++;
    }
  }
}

var num_2 = 16;
var x_2 = 2;
while (x_2 < num_2) {
  if (num_2 % x_2 === 0) {
    console.log("It is not a prime number");
    break;
  } else {
    if (x_2 + 1 === num_2) {
      console.log("It is a prime number");
      break;
    } else {
      x_2++;
    }
  }
}

var num_3 = 41;
var x_3 = 2;
while (x_3 < num_3) {
  if (num_3 % x_3 === 0) {
    console.log("It is not a prime number");
    break;
  } else {
    if (x_3 + 1 === num_3) {
      console.log("It is a prime number");
      break;
    } else {
      x_3++;
    }
  }
}

var num_4 = 64;
var x = 2;
while (x < num_4) {
  if (num_4 % x === 0) {
    console.log("It is not a prime number");
    break;
  } else {
    if (x + 1 === num_4) {
      console.log("It is a prime number");
      break;
    } else {
      x++;
    }
  }
}
