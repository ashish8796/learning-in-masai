function runProgram(input) {
  var inputArr = input.trim().split(/[\r\n]+/);

  var count = inputArr[1]
    .trim()
    .split(" ")
    .reduce(function (acc, cv) {
      if (cv % 2 !== 0) {
        return (acc += 1);
      } else {
        return acc;
      }
    }, 0);

  console.log(count > +inputArr[2].trim() ? "Nice Array" : "Bad Array");
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
