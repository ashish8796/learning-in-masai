//Time Complexity = O(n) Space Complexity = O(n)

function runProgram(input) {
  input = input.trim().split("\n");
  const n = Number(input[0]);
  const arr = input[1].trim().split(" ").map(Number);

  let prefSum = [arr[0]];

  for (let i = 1; i < n; i++) {
    prefSum[i] = prefSum[i - 1] + arr[i];
  }

  for (let i = 0; i < n; i++) {
    if (prefSum[i - 1] && prefSum[i - 1] === prefSum[n - 1] - prefSum[i]) {
      console.log(i + 1);
      return;
    }
  }

  console.log(-1);
}

if (process.env.USERNAME === "ashish") {
  runProgram(`1
  3`);
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
