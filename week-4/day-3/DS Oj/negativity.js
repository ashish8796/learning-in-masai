function runProgram(input) {
  var rawInput = input.split(/[\r\n]+/);
  var arr = rawInput[1].split(" ").map(Number);

  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
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
