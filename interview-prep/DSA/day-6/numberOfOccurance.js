function countOccurrence(arr, low, high, k, ans) {
  if (low > high) {
    return;
  }

  let mid = Math.floor(low + (high - low) / 2);

  if (arr[mid] == k) {
    ans[0] = ++ans[0];
  }

  countOccurrence(arr, low, mid - 1, k, ans);
  countOccurrence(arr, mid + 1, high, k, ans);
}

function runProgram(input) {
  input = input.trim().split("\n");
  const [n, k] = input[0].trim().split(" ").map(Number);
  const arr = input[1].trim().split(" ").map(Number);

  let ans = [0];
  countOccurrence(arr, 0, n - 1, k, ans);
  console.log(ans[0]);
}

if (process.env.USERNAME === "ashish") {
  runProgram(`6 3
  2 3 3 3 6 9`);
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
