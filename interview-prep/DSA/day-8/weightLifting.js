function handleTask(n, arr) {
  let w1 = arr.shift();
  let w2 = 0;

  let lastWeight = w1;
  let turn = "p-2";

  let weight = 0;

  while (arr.length) {
    // console.log({ weight, lastWeight, turn, w1, w2, arr });

    if (turn == "p-1") {
      if (weight <= lastWeight) {
        weight += arr.shift();
      } else {
        w1 += weight;
        lastWeight = weight;
        weight = 0;
        turn = "p-2";
      }
    } else if (turn == "p-2") {
      if (weight <= lastWeight) {
        weight += arr.pop();
      } else {
        w2 += weight;
        lastWeight = weight;
        weight = 0;
        turn = "p-1";
      }
    }

    // console.log({ weight, lastWeight, turn, w1, w2, arr });
  }

  if (weight) {
    if (turn == "p-1") {
      w1 += weight;
    } else {
      w2 += weight;
    }
  }

  console.log(w1, w2);
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
  runProgram(`2
  1
  1000
  3
  1 1 1
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
