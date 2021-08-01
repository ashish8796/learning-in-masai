function handleTask(n, arr, k) {
  // console.log({ n, arr, k });
  arr.sort((a, b) => a - b);

  let count = 0;
  let sum = 0;
  let boat = 0;

  for (let i = 0; i < arr.length; i++) {
    // console.log({ sum, boat, count, i: arr[i] });
    if (sum + arr[i] <= k && count <= 1) {
      count++;
      sum += arr[i];

      if (count == 1) {
        boat++;
      }
    } else {
      count++;
      boat++;
    }

    if (count == 2) {
      count = 0;
      sum = 0;
    }

    // console.log({ sum, boat, count, i: arr[i] });
  }

  console.log(boat);
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const [n, k] = input[line++].trim().split(" ").map(Number);
    const arr = input[line++].trim().split(" ").map(Number);

    handleTask(n, arr, k);
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`2
  4 5
  3 5 3 4
  4 3
  1 2 2 3`);
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
