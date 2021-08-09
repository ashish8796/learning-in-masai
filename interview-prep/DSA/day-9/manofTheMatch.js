function handleTask(n, arr) {
  let sumV = 0;
  let sumAB = 0;

  let turn = "A";
  for (let i = 0; i < arr.length; i++) {
    if (turn === "A") {
      sumAB += arr[i];
      // console.log({ sumV, sumAB, i, v: arr[i] });

      if (arr[i] % 2) {
        turn = "V";

        if ((i + 1) % 6 == 0) {
          turn = "A";
        }
      } else if ((i + 1) % 6 == 0) {
        turn = "V";
      }
    } else {
      sumV += arr[i];
      // console.log({ sumV, sumAB, i, v: arr[i] });

      if (arr[i] % 2) {
        turn = "A";

        if ((i + 1) % 6 == 0) {
          turn = "V";
        }
      } else if ((i + 1) % 6 == 0) {
        turn = "A";
      }
    }
  }

  // console.log({ sumV, sumAB });
  if (sumV > sumAB) {
    console.log("Virat Kohli");
  } else if (sumAB > sumV) {
    console.log("AB de Villiers");
  } else {
    console.log("Tie");
  }
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
  runProgram(`3
  2
  1 2 0 0 1 1 6 6 4 1 6 1
  3
  0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
  1
  0 1 0 1 0 0`);
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
