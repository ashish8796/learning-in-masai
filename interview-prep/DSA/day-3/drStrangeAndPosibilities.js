function handleTask(arr, low, high, ans, res) {
  ans.push(res);

  // console.log({ arr, low, high, res, ans });
  if (low > high) {
    return;
  }

  handleTask(arr, low + 1, high, ans, [...res, arr[low]]);
  handleTask(arr, low + 1, high, ans, res);
}

function runProgram(input) {
  const n = +input.trim();

  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  // console.log({ arr, n });

  let ans = [];
  handleTask(arr, 0, n - 1, ans, []);
  ans = Array.from(new Set(ans));

  for (let j = 0; j < ans.length; j++) {
    console.log(ans[j].join(" "));
  }

  // console.log(ans);
}

if (process.env.USERNAME === "ashish") {
  runProgram(`10`);
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
