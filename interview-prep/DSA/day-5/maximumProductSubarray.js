function handleTask(arr, low, high, res, ans) {
  if (low > high) {
    return;
  }

  let prod = res.reduce((acc, cv) => acc * cv, 1);
  console.log({ prod, res, ans });

  if (res.length && ans[0] < prod) {
    ans[0] = prod;
    console.log({ prod, res, ans });
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const n = Number(input[line++]);
    const arr = input[line++].trim().split(" ").map(Number);

    let max = arr[i];

    for (let j = 0; j < n; j++) {
      let prod = arr[j];

      for (let k = j + 1; k < n - 1; k++) {
        prod *= arr[k];

        if (max < prod) {
          max = prod;
        }
      }
    }

    console.log(max === -0 ? 0 : max);
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`2
  3
  -3 0 -2
  4
  4 5 -1 2`);
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
