var num = 5;
var n = 2;

while (n < num) {
  if (num % n === 0) {
    console.log("It is not a prime number.");
    break;
  } else {
    n++;
    if (n === num) {
      console.log("It is a prime number.");
    }
  }
}

var limit = 45948;
var sum = 0;

var total_multiples_of_3 = (limit - (limit % 3)) / 3;

for (let i = 1; i <= limit; i++) {
  if (i % 3 == 0) {
    sum += i;
  }
}
var average = sum / total_multiples_of_3;
console.log(average);

var starting_limit = 3;
var ending_limit = 10;
var sum_odd = 0;
var sum_even = 0;

for (let i = starting_limit + 1; i < ending_limit; i++) {
  i % 2 ? (sum_odd += i) : (sum_even += i);
}
console.log(sum_odd);
console.log(sum_even);

var scoreArr = [123, 434, 985, 143, 488, 696, 245, 384, 385, 274];
var lowest_score;
var highest_score;

for (let i = 0; i < scoreArr.length; i++) {
  var score = scoreArr[i];
  if (i === 0) {
    lowest_score = score;
    highest_score = score;
    continue;
  }
  lowest_score = lowest_score > score ? score : lowest_score;
  highest_score = highest_score > score ? highest_score : score;
}
console.log(lowest_score);
console.log(highest_score);

var num_2 = 8;

for (let x = 2; x <= num_2; x++) {
  if (x === num_2) {
    console.log("It is a prime number.");
  } else if (num_2 % x === 0) {
    console.log("It is not a prime number.");
    break;
  }
}

var str_2 = "AshishKumarSaini";
var vowel_count = 0;
var vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < str_2.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (str_2[i].toLowerCase() === vowels[j]) {
      vowel_count++;
    }
  }
}
var consonant_count = str_2.length - vowel_count;
console.log(vowel_count);
console.log(consonant_count);
