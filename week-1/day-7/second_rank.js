// Given an array of numbers (all unique). Find the second maximum number
// NOTE: You can't use any inbuilt functions like SORT
// Sample Input - [5, 3, 2, 4, 9]
// Sample Output - 5

// Screenshot of the output for the array [5, 4, 3, 2, 1]

var rough_arr = [];
var large = 0;
var difference = 0;
var arr = [5, 4, 3, 2, 1];

for (let i = 0; i < arr.length; i++) {
  if (i === 0) {
    large = arr[i];
  } else if (arr[i] > large) {
    large = arr[i];
  }
}

var second_large = 0;
for (let i = 0; i < arr.length; i++) {
  console.log("i - " + i);
  if (i === 0 && large !== arr[i]) {
    console.log("i - " + i);
    second_large = arr[i];
  } else if (arr[i] > second_large && large !== arr[i]) {
    console.log("i - " + i);
    second_large = arr[i];
  }
}

console.log(second_large);
