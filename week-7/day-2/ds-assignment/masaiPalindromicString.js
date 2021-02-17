function checkPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function runProgram(input) {
  var len = null;

  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      var littleStr = input.slice(i, j + 1);

      if (checkPalindrome(littleStr) && (!len || len < littleStr.length)) {
        len = littleStr.length;
      }
    }
  }

  console.log(len);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});

process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
