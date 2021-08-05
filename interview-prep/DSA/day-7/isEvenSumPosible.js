function findSum(arr, left, right, ans, res) {
  // console.log({ arr, left, right, ans, res });

  if (left > right || ans[0] == "Yes") {
    return;
  }
  let sum = res.reduce((acc, cv) => acc + cv, 0);

  if (res.length && sum % 2 == 0) {
    ans[0] = "Yes";
  }

  findSum(arr, left + 1, right, ans, [...res, arr[left]]);
  findSum(arr, left + 1, right, ans, [...res]);
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const n = Number(input[line++]);
    const arr = input[line++].trim().split(" ").map(Number);

    let ans = [""];

    findSum(arr, 0, n - 1, ans, [arr[0]]);
    console.log(ans[0] ? ans[0] : "No");
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`2
  1
  1 
  4
  1 2 3 4`);
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
