var arr;
var countTrue;
var i;
var vowelArr;
var j;

arr = ["pple", "mango", "red"];

countTrue = 0;

for (i = 0; i < arr.length; i++) {
  vowelArr = ["a", "e", "i", "o", "u"];

  for (j = 0; j < arr[i].length; j++) {
    if (vowelArr.includes(arr[i].toLowerCase()[j])) {
      countTrue++;
      break;
    }
  }
}

console.log(countTrue === arr.length);
