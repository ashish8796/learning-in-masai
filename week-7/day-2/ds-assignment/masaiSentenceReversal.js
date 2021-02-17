function runProgram(input) {
  var strArr = input.split(" ");
  var resultStr = "";

  for (i = strArr.length - 1; i >= 0; i--) {
    resultStr += strArr[i] + " ";
  }

  console.log(resultStr.trim());
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
