function runProgram(input) {
  var num = Math.floor(32 / Number(input));
  if (num === Infinity) {
    console.log(-1);
  } else if (num === 0) {
    console.log("Too Low");
  } else {
    console.log(num);
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
