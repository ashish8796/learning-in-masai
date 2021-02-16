var arr = ["Apple", "sky", "red"];

var countTrue = 0;

for (var i = 0; i < arr.length; i++) {
  var vowelArr = ["a", "e", "i", "o", "u"];

  for (var j = 0; j < arr[i].length; j++) {
    if (vowelArr.includes(arr[i].toLowerCase()[j])) {
      countTrue++;
      break;
    }
  }
}

console.log(countTrue === arr.length);
