function runProgram(input) {
  var rawArr = input.split(/[\r\n]+/);
  var tCases = Number(rawArr[0]);

  var x = 1;
  var resStr = "";
  var count = 0;
  for (var i = 0; i < tCases; i++) {
    var caseArr = rawArr.slice(x, x + 2);
    var itemsNum = Number(caseArr[0]);
    var numArr = caseArr[1].split(" ").map(Number);

    for (var j = 0; j < itemsNum - 2; j++) {
      var newArr = numArr.slice(j, j + 3);
      count = 0;

      for (var k = 0; k < newArr.length; k++) {
        if (newArr[k] % 2 === 0) {
          count++;
        }
      }

      if (count === 3) {
        break;
      }
    }
    x += 2;

    resStr = resStr.concat("\n", count === 3 ? "Yes" : "NO");
  }
  console.log(resStr);
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
