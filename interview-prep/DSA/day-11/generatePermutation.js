function handleTask(arr, left, right, ans, res) {
  if (left == right) {
    console.log(res, arr);
  } else {
    for (let i = left; i < right; i++) {
      arr = swap(arr, left, i);
      handleTask(arr, left + 1, right, ans, res);
      arr = swap(arr, left, i);
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}

function runProgram(input) {
  input = input.trim().split("\n");
  const n = Number(input[0]);
  const arr = input[1].trim().split(" ").map(Number);

  handleTask(arr, 0, n);
}

if (process.env.USERNAME === "ashish") {
  runProgram(`3
  1 2 3`);
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
