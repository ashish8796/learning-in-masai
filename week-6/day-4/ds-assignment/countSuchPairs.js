function runProgram(input) {
  var rawArr = input.split(/[\r\n]+/);
  var targetNum = rawArr[0].split(" ").map(Number)[1];

  var numArr = rawArr[1].split(" ").map(Number);
  var count = 0;

  for (var i = 0; i < numArr.length; i++) {
    for (var j = i + 1; j < numArr.length; j++) {
      if (numArr[i] + numArr[j] === targetNum) {
        count++;
      }
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
