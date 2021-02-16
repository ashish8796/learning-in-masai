function runProgram(input) {
  var inputArr = input.trim().split(/[\r\n]+/);
  var vowelArr = ["a", "e", "i", "o", "u"];

  var count = inputArr[1].split("").reduce(function (acc, cv) {
    if (vowelArr.includes(cv)) {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);
  console.log(count >= inputArr[1].length / 2 ? "Feel good!" : "Feel bad!");
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
