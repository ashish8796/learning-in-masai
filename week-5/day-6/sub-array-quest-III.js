function runProgram(input) {
  var inputArr = input.trim().split(/[\r\n]+/);
  var tCount = Number(inputArr[0]);

  var rawArr = inputArr.slice(1);

  var arr = rawArr.filter(function (_, i) {
    return i % 2;
  });

  var numArr = arr.map(function (cArr) {
    return cArr.trim().split(" ").map(Number);
  });

  var sumNumArr = numArr.map(function (cv) {
    return cv.filter(function (v) {
      return v % 2 === 0;
    });
  });

  console.log({ inputArr, rawArr, arr, numArr, sumNumArr });

  var resArr = [];

  sumNumArr.forEach(function (cv, i) {
    cv.forEach(function (e) {
      var str = "" + e;
      numArr[i].forEach(function (v) {
        if (v % 2 !== 0 && v > e) {
          str += v;
          resArr.push(str);
        }
      });
    });
  });

  console.log({ arr, sumNumArr, resArr });

  console.log(resArr.length);
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
