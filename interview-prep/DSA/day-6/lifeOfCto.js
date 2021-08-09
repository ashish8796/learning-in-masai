function runProgram(input) {
  input = input.trim().split("\n");
  const n = Number(input[0]);
  const arr = input[1].trim().split(" ").map(Number);

  let res;
  for (let i = 0; i < n; i++) {
    if (arr[i]) {
      res = i + "";
      break;
    }
  }

  console.log(res ? res : -1);
}

if (process.env.USERNAME === "ashish") {
  runProgram(`5
  0 0 0 0 0 `);
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
