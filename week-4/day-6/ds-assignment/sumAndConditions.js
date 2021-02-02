function runProgram(input) {
  var rawArr = input.trim().split(/[\r\n]+/);
  var sum = rawArr[1]
    .split(" ")
    .map(Number)
    .reduce(function (acc, el) {
      return acc + el;
    });

  console.log(sum > 100 ? "Greater" : "Lesser");
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
