function runProgram(input) {
  var rawArr = input.trim().split(/[\r\n]+/);
  var arr = rawArr[1].trim().split(" ").map(Number);

  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  console.log(product);
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
