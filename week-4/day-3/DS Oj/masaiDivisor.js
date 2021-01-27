function runProgram(input) {
  var arr = input.trim().split(" ").map(Number);

  var count = 0;
  var startLimit = arr[0];
  while (startLimit <= arr[1]) {
    if (!(startLimit % arr[2])) {
      count++;
    }
    startLimit++;
  }
  console.log(count);
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
