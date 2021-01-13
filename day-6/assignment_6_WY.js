var limit = 20;
for (let i = 1; i <= limit; i++) {
  console.log("Masai School");
}

var sum = 0;
for (let i = 1; i <= limit; i++) {
  if (i % 3 == 0) {
    sum += i;
  }
}
console.log(sum);

var num = 3;
var str = "";
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    var miniStr = i + "." + j;
    str += miniStr + " ";
  }
}
console.log(str);

var scoreArr = [123, 434, 985, 143, 488, 696, 245, 384, 385, 274];
var lowest_score;
for (let i = 0; i < scoreArr.length; i++) {
  var score = scoreArr[i];
  if (i === 0) {
    lowest_score = score;
    continue;
  }
  lowest_score = lowest_score > score ? score : lowest_score;
}
console.log(lowest_score);

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
console.log(consonant_count);
