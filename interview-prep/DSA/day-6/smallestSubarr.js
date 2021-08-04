function handleTask(n, arr) {
  // console.log({ n, arr });

  let freqObj = {};

  for (let i = 0; i < arr.length; i++) {
    freqObj[arr[i]] = freqObj[arr[i]]
      ? [++freqObj[arr[i]][0], freqObj[arr[i]][1], i]
      : [1, i, i];
  }

  let arrDeg;

  for (let key in freqObj) {
    if (arrDeg && freqObj[key][0] > arrDeg[0]) {
      arrDeg = freqObj[key];
    } else {
      arrDeg = freqObj[key];
    }
  }

  // console.log({ arrDeg });

  let d = 0;
  let len = 0;
  let x = arrDeg[1];

  while (d < arrDeg[0]) {
    len++;

    if (arrDeg[1] == arr[x]) {
      d++;
    }

    x++;
  }

  console.log(len);
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tCase = Number(input[0]);

  for (let i = 0, line = 1; i < tCase; i++) {
    const n = Number(input[line++]);
    const arr = input[line++].trim().split(" ").map(Number);

    handleTask(n, arr);
  }
}

if (process.env.USERNAME === "ashish") {
  runProgram(`1
  13
  1 3 3 2 2 3 6 6 5 5 6 6 3
  `);
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
