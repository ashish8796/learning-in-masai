function runProgram(input) {
  var num = Number(input);

  if (num === 2) {
    console.log("Yes");
  } else {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        console.log("No");
        break;
      } else if (i + 1 === num) {
        console.log("Yes");
        break;
      }
    }
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
