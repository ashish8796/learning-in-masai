function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const [n, c] = input[line++].trim().split(" ").map(Number);
    const arr = input[line++].trim().split(" ").map(Number);

    let steps = 0;
    let coins = arr[0];

    for (let j = 0; j < n; j++) {
      if (step < 2) {
        if (arr[j]) {
          coins += arr[j];
        } else {
          coins += arr[j];
        }
      }
    }
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`1
  5 7
  1 2 3 4 5`);
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
