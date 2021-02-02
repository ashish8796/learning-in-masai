function runProgram(input) {
  var num = Number(input);
  var sum = 0;
  var n = 1;
  while (n <= num) {
    if (n % 2 !== 0) {
      sum += n;
    }
    n++;
  }
  console.log(sum);
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
