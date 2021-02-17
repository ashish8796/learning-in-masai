function findSum(arr) {
  return arr.reduce(function (acc, cv) {
    return (acc += cv);
  }, 0);
}

function runProgram(input) {
  var rawArr = input.split(/[\r\n]+/);
  var numArr = rawArr[1].split(" ").map(Number);

  var resNum = null;

  numArr.forEach(function (cv, i) {
    var filteredArr = numArr.filter(function (_, j) {
      return j != i;
    });

    var sum = findSum(filteredArr);

    if (sum % 7 == 0 && (!resNum || resNum > cv)) {
      resNum = cv;
    }
  });

  console.log(
    resNum
      ? numArr.findIndex(function (cv) {
          return cv === resNum;
        })
      : -1
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
