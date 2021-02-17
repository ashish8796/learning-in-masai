function runProgram(input) {
  var rawArr = input.split(/[\r\n]+/);

  var firstArr = rawArr[1].split(" ").map(Number);
  var secondArr = rawArr[2].split(" ").map(Number);

  console.log(
    firstArr.filter(function (cv) {
      return secondArr.includes(cv);
    })[0]
  );
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
