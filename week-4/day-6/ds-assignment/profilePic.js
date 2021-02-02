function runProgram(input) {
  var rawArr = input.trim().split(/[\r\n]+/);
  var requiredPramArr = rawArr[0].split(" ").map(Number);
  var givenPramArr = rawArr[1].split(" ").map(Number);

  if (
    requiredPramArr[0] < givenPramArr[0] &&
    requiredPramArr[1] < givenPramArr[1]
  ) {
    console.log("Upload");
  } else {
    console.log(
      givenPramArr[0] < requiredPramArr[0]
        ? "Increase Length"
        : "Increase Width"
    );
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
