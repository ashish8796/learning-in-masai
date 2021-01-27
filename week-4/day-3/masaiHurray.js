function runProgram(input) {
  var num = Number(input);

  if (!(num % 35)) {
    console.log("Masai School");
  } else if (!(num % 5)) {
    console.log("School");
  } else if (!(num % 7)) {
    console.log("Masai");
  } else {
    console.log("Hurray!");
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
