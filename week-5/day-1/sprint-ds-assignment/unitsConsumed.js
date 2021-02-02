function runProgram(input) {
  var totalBill = Number(input);
  var fixedCharges = 80;
  var elecityCharge = totalBill - fixedCharges;
  var unitSum = 0;

  if (elecityCharge > 650) {
    unitSum += (elecityCharge - 650) / 10;
    elecityCharge -= elecityCharge - 650;
  }
  if (elecityCharge >= 500) {
    unitSum += (elecityCharge - 150) / 5;
    elecityCharge -= elecityCharge - 150;
  }
  if (elecityCharge > 0) {
    unitSum += elecityCharge / 3;
  }

  console.log(unitSum);
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
