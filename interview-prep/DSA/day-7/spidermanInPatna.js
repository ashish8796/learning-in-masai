function costIncurred(arr, left, right, ans, costArr, cost) {
  console.log({ arr, left, right, ans, costArr, cost });

  if (left > right) {
    costArr.push(cost);
    return;
  }

  cost += Math.abs(ans[0] - arr[left]);

  console.log({ left: arr[left], right, ans, costArr, cost });

  ans = arr[left];

  // console.log(cost);

  costIncurred(arr, left + 1, right, ans, costArr, cost);
  costIncurred(arr, left + 2, right, ans, costArr, cost);
}

function runProgram(input) {
  input = input.trim().split("\n");
  const n = Number(input[0]);
  const arr = input[1].trim().split(" ").map(Number);
  let ans = arr[0];
  let costArr = [];
  let cost = 0;

  costIncurred(arr, 0, n - 1, ans, costArr, cost);

  console.log(costArr.sort((a, b) => a - b)[0]);
}

if (process.env.USERNAME === "ashish") {
  runProgram(`4
  10 30 40 20`);
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
