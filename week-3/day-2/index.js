function printRelativePerson(city, arr) {
  console.log("");

  for (var i = 1; i < arr.length; i++) {
    if (city === arr[i].split(" ")[1]) {
      console.log(arr[i].split(" ")[0]);
    }
  }
}

function runProgram(input) {
  var arr = input.split("\n,");
  var arr_1 = arr[0].split(/[\r\n]+/);
  var arr_2 = arr[1].split(/[\r\n]+/);
  printRelativePerson(arr_1[0], arr_1);
  printRelativePerson(arr_2[0], arr_2);
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
