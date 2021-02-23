function runProgram(input) {
  var totalMins = Number(input);

  var hrs = Math.floor(totalMins / 60);
  var mins = totalMins % 60;

  console.log(
    hrs + (hrs === 1 ? "hr" : "hrs") + " " + (mins ? mins : "00") + "mins"
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
