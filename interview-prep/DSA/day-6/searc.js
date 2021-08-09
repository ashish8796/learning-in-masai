function searchLogN(arr, low, high, k, ans) {
  console.log({ arr, low, high, k, ans });
  if (low > high || ans.length) {
    return;
  }

  let mid = Math.floor(low + (high - low) / 2);

  if (arr[mid] == k) {
    ans[0] = mid;
    return;
  }

  searchLogN(arr, low, mid - 1, k, ans);
  searchLogN(arr, mid + 1, high, k, ans);
}

function runProgram(input) {
  input = input.trim().split("\n");
  const n = Number(input[0]);
  const arr = input[1].trim().split(" ").map(Number);

  const k = Number(input[2]);

  let ans = [];
  searchLogN(arr, 0, n - 1, k, ans);

  console.log(ans.length ? ans[0] : -1);
}

if (process.env.USERNAME === "ashish") {
  runProgram(`5
  1 2 4 5 6
  6`);
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
