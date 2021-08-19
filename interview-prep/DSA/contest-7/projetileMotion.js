function runProgram(input) {
  const [a, b, c, l, r] = input.trim().split(" ").map(Number);
  let x = l;

  let ans = 1;

  while (x <= r) {
    const val = a * x ** 2 + b * x + c;
    ans *= val;
    x++;
  }

  console.log(ans);
}

if (process.env.USERNAME === "ashish") {
  runProgram(`-1 3 8 -2 2`);
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
