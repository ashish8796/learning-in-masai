function handleTask(n, arr, m) {
  console.log({ n, arr });
  let low = 0;
  let high = n - 1;

  let ans = 0;

  while (low <= high) {
    let mid = low + (high - low) / 2;

    if (check(mid, arr, m)) {
      low = mid + 1;
      ans = mid;
    } else {
      high = mid - 1;
    }
  }

  console.log(ans);
}

function check(dist, arr, m) {
  console.log({ dist, arr, m });

  let emp = 1;
  let prev_seat = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - prev_seat >= dist) {
      prev_seat = arr[i];
      emp++;
    }
  }

  if (emp >= m) {
    return true;
  } else {
    false;
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const [n, m] = input[line++].trim().split(" ").map(Number);

    let arr = [];

    for (let j = 0; j < n; j++) {
      arr.push(Number(input[line++].trim()));
    }

    arr.sort((a, b) => a - b);

    handleTask(n, arr, m);
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`1
  5 3
  1
  2
  8
  4
  9`);
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
