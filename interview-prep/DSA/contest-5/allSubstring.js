function handleTask(arr, left, right, res) {
  if (res) {
    console.log(res);
  }

  if (left > right) {
    return;
  }

  // Time complexity = O(n)
  // Space complexity = O()

  handleTask(arr, left + 1, right, res + arr[left]);
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const n = Number(input[line++]);
    const arr = input[line++].trim().split("");

    for (let j = 0; j < n; j++) {
      handleTask(arr, j, n - 1, "");
    }
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`1
4 
aman`);
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
