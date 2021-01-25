function runProgram(input) {
  var paramArr = input.trim().split(/[\r\n]+/);
  var requiredWL = paramArr[0].trim().split(" ").map(Number);

  var uploadWL = paramArr[1].trim().split(" ").map(Number);

  if (requiredWL[0] < uploadWL[0] && requiredWL[1] < uploadWL[1]) {
    console.log("Upload");
  } else if (requiredWL[0] > uploadWL[0]) {
    console.log("Increase Length");
  } else if (requiredWL[1] > uploadWL[1]) {
    console.log("Increase Width");
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
