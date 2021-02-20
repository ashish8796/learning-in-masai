// function filterMatrix(arr) {
//   var matrixArr = [];
//   for(var i = 0; i<arr.)
// }

function runProgram(input) {
  var rawArr = input.split(/[\r\n]+/);
  var tCase = rawArr[0];

  var allMatrixArr = rawArr.slice(1).map(function (cv) {
    return cv.split(" ");
  });

  var firstMatrixLen = allMatrixArr[0].map(Number)[0];

  var matrixOrderArr = allMatrixArr.filter(function (cv) {});

  console.log({ rawArr, allMatrixArr, firstMatrixLen });
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
