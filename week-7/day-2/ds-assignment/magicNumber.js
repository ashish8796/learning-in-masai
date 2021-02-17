function runProgram(input) {
  var numArr = input.split("").map(Number);

  var num = Number(input);

  var magicNumArr = [4, 7];

  if (
    numArr.every(function (cv) {
      return magicNumArr.includes(cv);
    }) ||
    num % 4 === 0 ||
    num % 7 === 0
  ) {
    console.log("YES");
  } else {
    console.log("NO");
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
