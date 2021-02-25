function runProgram(input) {
  // var rawArr = input.trim().split(/[\r\n]+/);
  var totalMin = Number(input);

  var hrs = Math.floor(totalMin / 60);
  var min = totalMin % 60 === 0 ? "0" + (totalMin % 60) : totalMin % 60;

  console.log((hrs === 1 ? hrs + "hr" : hrs + "hrs") + " " + min + "mins");
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
