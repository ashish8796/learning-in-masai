function sortArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      var temp = arr[i];
      if (arr[i] > arr[j]) {
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log({ arr });
  return arr;
}

function runProgram(input) {
  var rawArr = input.split(/[\r\n]+/);

  var n = Number(rawArr[0]);
  var numArr = rawArr[1].split(" ").map(Number);

  var sortedArr = sortArr(numArr);

  console.log(`${sortedArr[0]}\n${sortedArr[sortedArr.length - 1]}`);
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
