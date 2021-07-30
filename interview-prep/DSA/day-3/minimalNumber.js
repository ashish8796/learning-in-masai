function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const n = Number(input[line++]);
    const arr = input[line++].trim().split(" ").map(Number);
    arr.sort((a, b) => a - b);
    // console.log({ arr });

    let zArr = [];
    let num = "";

    for (let j = 0; j < n; j++) {
      while (zArr.length && num.length) {
        num += zArr.pop();
      }

      if (arr[j] == 0) {
        zArr.push(arr[j]);
      } else {
        num += arr[j];
      }

      // console.log({ zArr, num });
    }

    console.log(num);
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`3
  4
  2 1 0 0
  4
  1 4 2 3
  4
  5 2 3 2`);
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
