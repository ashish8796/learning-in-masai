function runProgram(input) {
  var distance = Number(input);
  var stepForwardArr = [5, 4, 3, 2, 1];
  var stepCount = 0;

  stepForwardArr.forEach((stepForward) => {
    if (distance >= stepForward) {
      stepCount += (distance - (distance % stepForward)) / stepForward;
      distance = distance % stepForward;
    }
  });

  console.log(stepCount);
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
