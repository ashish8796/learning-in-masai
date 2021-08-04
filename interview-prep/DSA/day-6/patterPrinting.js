function runProgram(input) {
  input = Number(input.trim());

  let ans = "";

  for (let i = 1; i <= input; i++) {
    let s = "*".repeat(i);
    ans += s + "\n";
  }

  console.log(ans.trim());
}

if (process.env.USERNAME === "ashish") {
  runProgram(`2`);
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
