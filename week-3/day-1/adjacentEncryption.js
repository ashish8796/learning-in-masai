function encryptStr(str) {
  var encruptStr = "abcdefghijklmnopqrstuvwxyz";
  var resStr = "";
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < encruptStr.length; j++) {
      if (str[i] === "z") {
        resStr += encruptStr[0];
        break;
      } else {
        if (str[i] === encruptStr[j]) {
          resStr += encruptStr[j + 1];
        }
      }
    }
  }

  return resStr;
}

console.log(encryptStr("zyfqwxaeiou"));
