function handleTask(arr, left, right, ans, res) {
  if (!ans.includes(res)) {
    console.log(res.trim());
  }

  ans.push(res);

  if (left > right) {
    return;
  }

  handleTask(arr, left + 1, right, ans, res + " " + arr[left]);
  handleTask(arr, left + 1, right, ans, res);
}

function runProgram(input) {
  let n = Number(input.trim());

  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  handleTask(arr, 0, n - 1, [], "");
}

if (process.env.USERNAME === "ashish") {
  runProgram(`3`);
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
