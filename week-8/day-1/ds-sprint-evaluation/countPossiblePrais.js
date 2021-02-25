function runProgram(input) {
  // var rawArr = input.trim().split(/[\r\n]+/);
  var values = input.split(" ").map(Number);

  var n = values[0];
  var m = values[1];

  var x = 0;

  var arr = [];

  while (x < n) {
    if (!((n - x ** 2) ** 2 + x - m)) {
      var y = n - x ** 2;
      arr.push([x, y]);
    }
    x++;
  }

  console.log(arr.length);
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
