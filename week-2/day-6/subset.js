// Given the width and height print a brick wall [Full brick |___| (Pipe separated by 3 underscores) Half brick __| or |__ (2 underscores) ]
// Sample brick wall of width four bricks and height 5 bricks

// Screenshot of the output for width 10 bricks and height 6

function swapCase(w, h) {
  var resStr = "";

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < 26; j++) {
      if (str[i] === lowerStr[j]) {
        resStr += upperStr[j];
      } else if (str[i] === upperStr[j]) {
        resStr += lowerStr[j];
      }
    }
  }

  return resStr;
}

console.log(swapCase(" Test"));
console.log(swapCase("masai"));
console.log(swapCase("SCHOOL"));
console.log(swapCase("MiXeD"));
