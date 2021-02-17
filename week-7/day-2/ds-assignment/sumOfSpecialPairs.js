function checkPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    } else if (i + 1 === num) {
      return true;
    }
  }
}

function runProgram(input) {
  var rawArr = input.split(/[\r\n]+/);

  var sum = 0;

  var arr = rawArr[1].split(" ").map(Number);

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      var indexDiff = j - i;

      if (checkPrime(indexDiff) || indexDiff === 2) {
        sum += Math.abs(arr[j] - arr[i]);
      }
    }
  }

  console.log(sum);
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
