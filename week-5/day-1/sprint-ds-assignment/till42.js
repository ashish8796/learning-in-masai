function runProgram(input) {
  var rawArr = input.trim().split(/[\r\n]+/);
  var arr = rawArr[1]
    .split("42")[0]
    .trim()
    .split(" ")
    .reduce(function (acc, v) {
      return acc + Number(v);
    }, 42);
  console.log(arr);
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
