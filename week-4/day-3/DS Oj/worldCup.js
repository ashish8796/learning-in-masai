function runProgram(input) {
  var teamScoreArr = input.trim().split(/[\r\n]+/);
  var newZealandScoreArr = teamScoreArr[0].trim().split(" ").map(Number);
  var englandScoreArr = teamScoreArr[1].trim().split(" ").map(Number);

  if (newZealandScoreArr[0] > englandScoreArr[0]) {
    console.log("New Zealand");
  } else if (
    newZealandScoreArr[0] === englandScoreArr[0] &&
    newZealandScoreArr[1] > englandScoreArr[1]
  ) {
    console.log("New Zealand");
  } else if (
    newZealandScoreArr[0] === englandScoreArr[0] &&
    newZealandScoreArr[1] === englandScoreArr[1] &&
    newZealandScoreArr[2] > englandScoreArr[2]
  ) {
    console.log("New Zealand");
  } else {
    console.log("England");
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
