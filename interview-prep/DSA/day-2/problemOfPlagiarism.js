function handleTask(arr, low, high, l, r, res, s) {
  
}

function runProgram(input) {
  input = input.trim().split("\n");
  const n = Number(input[0]);
  const [l, r] = input[line++].trim().split(" ").map(Number);
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }

  let res = [];

  handleTask(arr, 0, n - 1, l, r, res, "");
}

if (process.env.USERNAME === "ashish") {
  runProgram(`3
  0 1`);
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
