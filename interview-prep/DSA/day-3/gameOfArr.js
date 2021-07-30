function handleTask(n, arr) {
  console.log({ n, arr });
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  const arr = input[1].trim().split(" ").map(Number);

  k = k % n;
  // console.log({ k });

  let ans = [...arr.slice(k), ...arr.slice(0, k)];
  console.log(ans.join(" "));
}

if (process.env.USERNAME === "ashish") {
  runProgram(`6 4
  1 2 5 4 0 6`);
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
