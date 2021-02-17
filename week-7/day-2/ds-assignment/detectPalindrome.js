function checkPalindrome(numStr, i) {
  var reverseNumStr = "";

  numStr.split("").forEach(function (e) {
    reverseNumStr = e + reverseNumStr;
    console.log({ reverseNumStr, numStr });
  });

  return reverseNumStr === numStr;
}

function runProgram(input) {
  var numStr = input + "";

  console.log(checkPalindrome(numStr) ? "Yes" : "No");
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
