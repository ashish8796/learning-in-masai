function runProgram(input) {
  var input = input
    .trim()
    .split(/[\r\n]+/)
    .map(Number);

  var testCases = input[0];

  for (i = 1; i < input.length; i++) {
    for (j = 1; j <= input[i]; j++) {
      console.log({ i: input[i], j: j });

      if (j % 3 == 0 && j % 5 == 0) {
        j = "FizzBizz";
      } else if (j % 3 == 0) {
        j = "Fizz";
      } else if (j % 5 == 0) {
        j = "Bizz";
      }
      // console.log(j);
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
