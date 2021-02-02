function runProgram(input) {
  var distance = Number(input);
  var stepArr = [5, 4, 3, 2, 1];
  var count = 0;
  stepArr.forEach((v) => {
    if (distance >= v) {
      count += (distance - (distance % v)) / v;
      distance = distance - count * v;
    }
  });

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
