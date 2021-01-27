function runProgram(input) {
  var arr = input.trim().split(/[\r\n]+/);
  var firstStudentArr = arr[0].trim().split(" ").map(Number);
  var secondStudentArr = arr[1].trim().split(" ").map(Number);
  var firstTotal = firstStudentArr[0] + firstStudentArr[1] + firstStudentArr[2];
  var secondTotal =
    secondStudentArr[0] + secondStudentArr[1] + secondStudentArr[2];

  if (
    firstTotal > secondTotal ||
    (firstTotal === secondTotal && firstStudentArr[2] > secondStudentArr[2]) ||
    (firstTotal === secondTotal &&
      firstStudentArr[2] === secondStudentArr[2] &&
      firstStudentArr[0] > secondStudentArr[0])
  ) {
    console.log("First");
  } else {
    console.log("Second");
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
