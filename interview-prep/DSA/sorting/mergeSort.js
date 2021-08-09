function mergeSort(n, arr) {
  console.log({ n, arr });
}

function runProgram(input) {
  input = input.trim().split("\n");

  const n = Number(input[0]);
  const arr = input[1].trim().split(" ").map(Number);

  mergeSort(n, arr);
}

if (process.env.USERNAME === "ashish") {
  runProgram(`5
  3 5 0 9 8`);
} else {
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
}
