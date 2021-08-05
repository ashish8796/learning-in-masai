function birthdayShopping(arr, left, right, k, ans, res = "") {
  // console.log({ arr, left, right, k, ans, res, len: res.split(" ").length });

  if (left > right || (res && res.split(" ").length >= k)) {
    if (res && res.split(" ").length >= k) {
      console.log(res);
    }

    return;
  }

  let prev = res;

  res = res.length ? res + " " + arr[left] : res + arr[left];

  // console.log({ arr, left, right, k, ans, res, prev });

  birthdayShopping(arr, left + 1, right, k, ans, res);
  birthdayShopping(arr, left + 1, right, k, ans, prev);
}

function runProgram(input) {
  input = input.trim();
  const [n, k] = input.split(" ").map(Number);

  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  let ans = [];

  birthdayShopping(arr, 0, n - 1, k, ans);
}

if (process.env.USERNAME === "ashish") {
  runProgram(`4 1`);
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
