function handleTask(n, c) {
  // console.log({ n, c });
  let num1 = Number(c.join(""));
  let num2 = Number(n.join(""));

  if (num1 > num2) {
    console.log("False");
  } else {
    console.log("True");
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const c = input[line++].trim().split(".").map(Number);
    const n = input[line++].trim().split(".").map(Number);

    handleTask(n, c);
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`3
  2.0.1
  1.9.8
  12.0.1
  12.10.0
  1.1.10
  1.1.12`);
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
