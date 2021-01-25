function runProgram(input) {
  var scoreArr = input.trim().split(" ").map(Number);
  if (scoreArr[0] > scoreArr[1]) {
    console.log("Australia");
  } else if (scoreArr[1] > scoreArr[0]) {
    console.log("England");
  } else if (scoreArr[0] === scoreArr[1]) {
    console.log("Tie");
  }
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
