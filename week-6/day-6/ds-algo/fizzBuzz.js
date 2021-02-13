function runProgram(input) {
  var rawArr = input.split(/[\r\n]+/);
  var resStr = "";

  for (var i = 1; i <= rawArr.length; i++) {
    for (j = 1; j <= rawArr[i]; j++) {
      if (j % 3 == 0 && j % 5 == 0) {
        resStr += "FizzBuzz" + "\n";
      } else if (j % 3 == 0) {
        resStr += "Fizz" + "\n";
      } else if (j % 5 == 0) {
        resStr += "Buzz" + "\n";
      } else {
        resStr += j + "\n";
      }
    }
  }

  console.log(resStr.trim());
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
