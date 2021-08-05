function runProgram(input) {
  input = input.trim().split("\n");

  const n = Number(input[0]);
  const arr = input[1].trim().split(" ").map(Number);

  const newArr = Array.from(new Set(arr));
  console.log(newArr.reduce((acc, cv) => acc + cv, 0));
}

if (process.env.USERNAME === "ashish") {
  runProgram(`5
  2 2 2 1 1`);
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
