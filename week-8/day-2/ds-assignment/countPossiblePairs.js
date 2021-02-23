function runProgram(input) {
  var rawArr = input.split(" ").map(Number);
  var n = rawArr[0];
  var m = rawArr[1];

  var count = 0;

  for (var x = 0; x <= n; x++) {
    var y = n - x ** 2;

    if (x ** 2 + y - n === y ** 2 + x - m && x >= 0 && y >= 0) {
      count++;
    }
  }
  console.log(count);
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
