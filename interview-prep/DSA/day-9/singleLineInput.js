function handleTask(n, arr) {
  console.log({ n, arr });
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const n = Number(input[line++]);
    const arr = input[line++].trim().split(" ").map(Number);

    handleTask(n, arr);
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`3
  2
  1 2 0 0 1 1 6 6 4 1 6 1
  3
  0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
  1
  0 1 0 1 0 0`);
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
