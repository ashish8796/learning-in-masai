// Print the mirror image of the given lowercase string ayzb should become zbay
// Note: mirror image does not mean reverse (The mirror image of a is z, b is y, c is x ...)

// Screenshot of the output for the strings stdin script cmd zebra

function mirrorImage(str) {
  var plainStr = "abcdefghijklmnopqrstuvwxyz";
  var mirroStr = "zyxwvutsrqponmlkjihgfedcba";
  var resStr = "";
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < plainStr.length; j++) {
      if (plainStr[j] === str[i]) {
        resStr += mirroStr[j];
        break;
      }
    }
  }
  return resStr;
}

console.log(mirrorImage("stdin"));
console.log(mirrorImage("script"));
console.log(mirrorImage("script"));
