function handleTask(n, arr, type) {
  let s1 = [];
  let s2 = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      s1.push(arr[i]);
    } else if (arr[i] % 2 !== 0) {
      s2.push(arr[i]);
    }
  }

  let ans;

  if (type == 1) {
    ans = [...s1.sort((a, b) => a - b), ...s2.sort((a, b) => a - b)];
  } else {
    ans = [...s2.sort((a, b) => a - b), ...s1.sort((a, b) => a - b)];
  }

  console.log(ans.join(" "));
  // console.log({ n, arr });
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const n = Number(input[line++]);
    const arr = input[line++].trim().split(" ").map(Number);
    const type = Number(input[line++]);

    handleTask(n, arr, type);
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`2
  6
  1 3 5 2 7 4
  1
  6 
  1 3 5 2 7 4
  2`);
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
