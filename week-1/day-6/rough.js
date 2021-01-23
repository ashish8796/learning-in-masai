// Given a sentence print the count of words (Separated by a space character)

// Screenshot of the output for "Java", "There is a smallest natural number"

var sen_1 = "Java";
var sen_2 = "There is a smallest natural number";

var space_count_1 = 0;

for (let i = 0; i < sen_1.length; i++) {
  if (sen_1[i] === " ") {
    space_count_1 += 1;
  }
}
var words_1 = space_count_1 + 1;
console.log(words_1);

var space_count_2 = 0;

for (let i = 0; i < sen_2.length; i++) {
  if (sen_2[i] === " ") {
    space_count_2 += 1;
  }
}
var words_2 = space_count_2 + 1;
console.log(words_2);
