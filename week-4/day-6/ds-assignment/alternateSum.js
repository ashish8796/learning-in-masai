function runProgram(input) {
  var rawArr = input.trim().split(/[\r\n]+/);

  console.log(
    rawArr[1]
      .trim()
      .split(" ")
      .map(Number)
      .reduce(function (acc, el, i) {
        if (!(i % 2)) {
          return acc + el;
        } else {
          return acc;
        }
      })
  );
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
