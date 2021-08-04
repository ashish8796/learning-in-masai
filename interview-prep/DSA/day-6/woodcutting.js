function runProgram(input) {
  input = input.trim().split("\n");
  const n = Number(input[0]);
  const arr = input[1].trim().split(" ").map(Number);

  let max = 0;
  let index;

  for (let i = 1; i <= n; i++) {
    if (arr[i - 1] / i > max) {
      max = arr[i - 1] / i;
      index = i - 1;
    }
  }

  // console.log({ max, index });
  console.log(arr[index] * (n / (index + 1)));
}

if (process.env.USERNAME === "ashish") {
  runProgram(`2
  1 5  
  `);
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
