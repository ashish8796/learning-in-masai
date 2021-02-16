function runProgram(input) {
  var inputArr = input.trim().split(/[\r\n]+/);

  var sum = inputArr[1]
    .trim()
    .split(" ")
    .reduce(function (acc, cv, i) {
      return (acc += +cv * (i + 1));
    }, 0);

  console.log(sum);
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
