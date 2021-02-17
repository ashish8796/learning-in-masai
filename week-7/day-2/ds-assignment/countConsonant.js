function runProgram(input) {
  var vowelArr = ["a", "e", "i", "o", "u"];

  var countConsonants = input.split("").reduce(function (acc, cv) {
    return (acc += vowelArr.includes(cv) ? 0 : 1);
  }, 0);

  console.log(countConsonants);
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
